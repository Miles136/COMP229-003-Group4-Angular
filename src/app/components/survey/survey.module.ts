import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PartialsModule } from "../partials/partials.module";
import { ListComponent } from "./list.component";
import { ModelModule } from "src/app/models/model.module";

@NgModule({
    imports: [ModelModule,BrowserModule,FormsModule,PartialsModule],
    declarations: [ListComponent],
    exports: [ListComponent]
})

export class SurveyModule {}