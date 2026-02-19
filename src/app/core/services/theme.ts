import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSignal = signal<Theme>(this.getInitialTheme());
  
  currentTheme = this.themeSignal.asReadonly();
  isDark = () => this.themeSignal() === 'dark';

  constructor() {
    effect(() => {
      const theme = this.themeSignal();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
      }
    });
  }

  private getInitialTheme(): Theme {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('fass-theme') as Theme;
      if (saved === 'dark' || saved === 'light') return saved;
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  }

  setTheme(theme: Theme) {
    this.themeSignal.set(theme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('fass-theme', theme);
    }
  }

  toggleTheme() {
    const newTheme = this.themeSignal() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}
