import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionWrapper } from '../../shared/components/section-wrapper/section-wrapper';
import { Card } from '../../shared/components/card/card';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionWrapper, Card],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  private translationService = inject(TranslationService);
  t = this.translationService.t;
}
