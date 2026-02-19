import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-wrapper.html',
  styleUrls: ['./section-wrapper.scss'],
})
export class SectionWrapper {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() badge = '';
  @Input() background: 'default' | 'gradient' | 'dark' = 'default';
}
