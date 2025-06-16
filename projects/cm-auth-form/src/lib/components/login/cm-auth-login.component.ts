import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/passwordValidator';

@Component({
  selector: 'cm-auth-form-login',
  templateUrl: './cm-auth-login.component.html',
  imports: [ReactiveFormsModule],
  styleUrl: `./cm-auth-login.component.scss`,
  standalone: true
})
export class CmAuthLoginComponent {
  private fb = inject(FormBuilder);

  @Output() onFormSubmit = new EventEmitter();

  signinForm = this.fb.group({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      updateOn: 'blur',
    }),
    password: new FormControl('', [Validators.required, passwordValidator()])
  });

  onSignIn(){
    const { value } = this.signinForm;
    this.onFormSubmit.emit(value);
  }
}
