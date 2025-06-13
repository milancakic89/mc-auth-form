import { NgModule } from "@angular/core";
import { CmAuthFormComponent } from "./cm-auth-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [CmAuthFormComponent],
    imports: [ReactiveFormsModule],
    exports: [CmAuthFormComponent]
})
export class CMAuthModule {}