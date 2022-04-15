import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "../partials/footer.component";
import { HeaderComponent } from "../partials/header.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    exports: [FooterComponent,HeaderComponent]
})
export class PartialsModule {}