import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MyDatePicker } from "./my-date-picker.component";
import { FocusDirective } from "./directives/my-date-picker.focus.directive";
import { TextMaskModule  } from "angular2-text-mask";

@NgModule({
    imports: [CommonModule, FormsModule, TextMaskModule],
    declarations: [MyDatePicker, FocusDirective],
    exports: [MyDatePicker, FocusDirective]
})
export class MyDatePickerModule {
}
