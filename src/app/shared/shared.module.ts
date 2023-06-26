import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder.directive";
import { DropDownDirective } from "./drop-down.directive";
import { UnsavedGuard } from "./guards/changes-saved/changes-saved.guard";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropDownDirective,
        ConfirmDialogComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropDownDirective,
        CommonModule,
        ConfirmDialogComponent
    ],
    providers: [UnsavedGuard]
})
export class SharedModule {}