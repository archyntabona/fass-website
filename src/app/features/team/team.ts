import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionWrapper } from '../../shared/components/section-wrapper/section-wrapper';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, SectionWrapper, RouterLink],
  templateUrl: './team.html',
  styleUrls: ['./team.scss'],
})
export class Team {
  private translationService = inject(TranslationService);
  t = this.translationService.t;

  teamMembers = [
    {
      key: 'sebastien' as const,
      image: 'assets/images/sebastien-pambu.jpg'
    },
    {
      key: 'archy' as const,
      image: 'assets/images/archy-ntabona.jpg'
    }
  ];

  getMember(key: 'sebastien' | 'archy') {
    return this.t().team.members[key];
  }
}
