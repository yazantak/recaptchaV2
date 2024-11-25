import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  siteKey="6LcCTYkqAAAAAKA2amaQii8QxfKcq_kL9V1A3AWw";
  formData={
  email: '',
  password: '',
  captchaResponse:''
  }

  onCaptchaResolved(captchaResponse: string | null): void {
    if (captchaResponse) {
      this.formData.captchaResponse = captchaResponse;
    } else {
      this.formData.captchaResponse = '';  
    }
    console.log('Captcha resolved with response:', this.formData.captchaResponse);
  }

  onSubmit(f:NgForm): void {
    if (!this.formData.captchaResponse) {
      alert('Please complete the CAPTCHA');
      return;
    }

    // Send login data and captchaResponse to your backend
    console.log('Form submitted with:', {
      email: this.formData.email,
      password: this.formData.password,
      captchaResponse: this.formData.captchaResponse
    });
    alert('successfully logged In');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
