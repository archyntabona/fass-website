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
      name: 'Sebastien Pambu',
      role: 'Co-Founder & Lead Engineer',
      bio: 'Visionary leader with a passion for technology and community development.',
      image: 'assets/images/sebastien-pambu.jpg'
    },
    {
      name: 'Archy Ntabona',
      role: 'Co-Founder & Operations',
      bio: 'Strategic thinker ensuring operational excellence and project success.',
      image: 'assets/images/archy-ntabona.jpg'
    }
  ];
}
