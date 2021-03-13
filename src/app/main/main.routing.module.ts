import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { paths } from "../common/paths/app-paths";
import { AuthGuard } from "./authentication/services/auth-gard.service";
import { HomeModule } from "./home/home.module";
import { HomeComponent } from "./home/home/home.component";




const mainRoutes: Routes = [
    {
        path: paths.home,
        pathMatch: "full",
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes),
        HomeModule
    ],
    exports: [RouterModule],
})
export class mainRoutingModule {}
