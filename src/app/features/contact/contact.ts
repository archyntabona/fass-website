import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SectionWrapper } from '../../shared/components/section-wrapper/section-wrapper';
import { ContactService, ContactForm } from '../../core/services/contact';
import { TranslationService } from '../../core/services/translation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionWrapper, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  private translationService = inject(TranslationService);
  t = this.translationService.t;

  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      this.submitError = false;
      
      this.contactService.submitContactForm(this.formData).subscribe({
        next: (success) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          form.resetForm();
        },
        error: () => {
          this.isSubmitting = false;
          this.submitError = true;
        }
      });
    }
  }
}
