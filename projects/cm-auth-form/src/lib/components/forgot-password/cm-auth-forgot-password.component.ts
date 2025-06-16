import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'cm-auth-form-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './cm-auth-forgot-password.component.html',
  styleUrl: './cm-auth-forgot-password.component.scss'
})
export class CmAuthForgotPasswordComponent {
 private fb = inject(FormBuilder);

  @Output() onFormSubmit = new EventEmitter();

  resetForm = this.fb.group({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      updateOn: 'blur',
    })
  });

  onSignIn(){
    const { value } = this.resetForm;
    this.onFormSubmit.emit(value);
  }
}
