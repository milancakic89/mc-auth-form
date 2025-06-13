import { Component } from '@angular/core';
import { CmAuthFormComponent } from "../../../projects/cm-auth-form/src/lib/components/login/cm-auth-form.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-component',
  imports: [CmAuthFormComponent, RouterLink],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {

  onFormSubmit(data: any){
    console.log(data)
  }
}
