import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { TaskComponent } from "./user-details/task/task.component";
import { NewTaskComponent } from "./user-details/new-task/new-task.component";
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./shared/card/card.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule, DatePipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";


@NgModule({
    // Composants (non Standalone) à register
    declarations: [
        AppComponent,
        UserDetailsComponent,
        TaskComponent,
        NewTaskComponent,
        HeaderComponent,
        CardComponent,
        UserComponent,
    ],
    // Standalone Components, Services, Modules Angular, etc..
    imports: [
        BrowserModule,
        // UserDetailsComponent,
        // TaskComponent,
        // NewTaskComponent,
        // HeaderComponent,
        // CardComponent,
        // UserComponent,
        CommonModule,
        MatButtonModule, 
        MatFormFieldModule,
        DatePipe,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        MatCardModule, 
    ],
    bootstrap: [AppComponent],
})
export class AppModule { 



}