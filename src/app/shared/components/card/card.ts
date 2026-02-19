import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class Card {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() icon = '';
  @Input() link = '';
  @Input() linkText = 'Learn More';
}
