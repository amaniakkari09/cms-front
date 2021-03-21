import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

import { FuseSearchBarModule, FuseShortcutsModule } from "@fuse/components";
import { FuseSharedModule } from "@fuse/shared.module";

import { ToolbarComponent } from "app/layout/components/toolbar/toolbar.component";

import { ProfileModule } from "../../../main/authentication/profile/profile.module";
import { ManageAccountModule } from "app/main/manage-account/manage-account.module";

@NgModule({
    declarations: [ToolbarComponent],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        ProfileModule,
        ManageAccountModule
    ],
    exports: [ToolbarComponent],
})
export class ToolbarModule {}
