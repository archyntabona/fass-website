import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapper } from '../../shared/components/section-wrapper/section-wrapper';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionWrapper],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class About {
  private translationService = inject(TranslationService);
  t = this.translationService.t;
}
