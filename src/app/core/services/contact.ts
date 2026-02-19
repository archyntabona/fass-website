import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  submitContactForm(data: ContactForm): Observable<boolean> {
    // Mock API call
    console.log('Contact Form Data:', data);
    return of(true).pipe(delay(1500)); // Simulate network delay
  }
}
