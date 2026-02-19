import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapper } from '../../shared/components/section-wrapper/section-wrapper';
import { Card } from '../../shared/components/card/card';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-initiatives',
  standalone: true,
  imports: [CommonModule, SectionWrapper, Card],
  templateUrl: './initiatives.html',
  styleUrls: ['./initiatives.scss'],
})
export class Initiatives {
  private translationService = inject(TranslationService);
  t = this.translationService.t;
}
