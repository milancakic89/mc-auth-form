import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

export const routes: Routes = [
    {
        path: '',
        component: TestComponentComponent
    }
];
