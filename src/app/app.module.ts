import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule, DatePipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./user-details/task.module";


@NgModule({
    // Composants (non Standalone) à register
    declarations: [
        AppComponent,
        HeaderComponent,
        //CardComponent, // déplacé dans SharedModule
        UserComponent, 
    ],
    // Standalone Components, Modules Angular, etc..
    imports: [
        BrowserModule, // très utile tout le temps (ç n'importer qu'ici, pas dans les autres modules)
        // UserDetailsComponent,
        // TaskComponent,
        // NewTaskComponent,
        // HeaderComponent,
        // CardComponent,
        // UserComponent,
        CommonModule,
        MatButtonModule, 
        DatePipe, // Pas nécessaire car toutes les Pipes sont déjà dans BrowserModule
        MatCardModule, 
        SharedModule, // comprend CardComponent
        TaskModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { 



}