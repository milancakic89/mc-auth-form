import { Component } from '@angular/core';
import { CmAuthFormComponent } from "../../../projects/cm-auth-form/src/lib/components/login/cm-auth-form.component";
import { RouterLink } from '@angular/router';
import { ForgotPasswordComponent } from "../../../projects/cm-auth-form/src/lib/components/forgot-password/forgot-password.component";
import { SignupComponent } from "../../../projects/cm-auth-form/src/lib/components/signup/signup.component";

@Component({
  selector: 'app-test-component',
  imports: [RouterLink, CmAuthFormComponent, ForgotPasswordComponent, SignupComponent],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {

  onFormSubmit(data: any){
    console.log(data)
  }
}
