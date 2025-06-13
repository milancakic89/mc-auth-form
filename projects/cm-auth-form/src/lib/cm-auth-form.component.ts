import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from './validators/passwordValidator';

@Component({
  selector: 'cm-auth-form',
  templateUrl: './cm-auth-form.component.html',
  styleUrl: `./cm-auth-form.component.scss`,
  standalone: false
})
export class CmAuthFormComponent {
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
    console.log(value)
    this.onFormSubmit.emit(value);
  }
}
