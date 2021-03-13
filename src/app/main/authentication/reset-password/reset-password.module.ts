import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ResetPasswordComponent } from "./reset-password.component";
import { MaterialModule } from "app/main/material.module";
import { ParticlesModule } from 'angular-particle';

const routes = [
    {
        path: "auth/reset-password/:token",
        component: ResetPasswordComponent,
    },
];

@NgModule({
    declarations: [ResetPasswordComponent],
    imports: [RouterModule.forChild(routes), MaterialModule ,ParticlesModule ],
})
export class ResetPasswordModule {}
