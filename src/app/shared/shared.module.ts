import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [
        CardComponent,
        // others...
    ],
    // Il aut aussi ajouter ici pour dire que c'est dispo dans d'autres modules (AppModule)
    exports: [
        CardComponent,
        // others...
    ],
    imports: [],
    // bootstrap: [] // Que pour le root Module
})
export class SharedModule {

}