import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CmAuthLoginComponent } from "../../../projects/cm-auth-form/src/lib/components/login/cm-auth-login.component";
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-component',
  imports: [ReactiveFormsModule, CmAuthLoginComponent],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {

  test = new FormControl('', [Validators.required, Validators.minLength(3)]);

  onFormSubmit(data: any){
    console.log(data)
  }
}
