import { Component } from '@angular/core';
import { CMAuthModule } from "../../../projects/cm-auth-form/src/lib/cm-auth-form.module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-component',
  imports: [CMAuthModule, RouterLink],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {

}
