import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/passwordValidator';

@Component({
  selector: 'cm-auth-form-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
private fb = inject(FormBuilder);

  @Output() onFormSubmit = new EventEmitter();

  signupForm = this.fb.group({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      updateOn: 'blur',
    }),
    password: new FormControl('', [Validators.required, passwordValidator()]),
    repeatPassword: new FormControl('', [Validators.required])
  },
  { validators: this.matchValues('password', 'repeatPassword') });

matchValues(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (!control || !matchingControl) {
      return null; // controls not yet available
    }

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return null; // another validator has already found an error
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }

    return null;
  };
}

  onSignIn(){
    const { value } = this.signupForm;
    this.onFormSubmit.emit(value);
  }
}
