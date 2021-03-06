import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "app/main/material.module";
import { ConfirmAccountComponent } from "./confirm-account.component";
import { ParticlesModule } from 'angular-particle';

const routes = [
    {
        path: "auth/confirm/:token",
        component: ConfirmAccountComponent,
    },
];

@NgModule({
    declarations: [ConfirmAccountComponent],
    imports: [RouterModule.forChild(routes), MaterialModule ,
        ParticlesModule],
})
export class ConfirmAccountModule {}
