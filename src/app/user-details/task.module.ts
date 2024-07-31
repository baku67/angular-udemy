import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { UserDetailsComponent } from "./user-details.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    declarations: [
        NewTaskComponent,
        TaskComponent,
        UserDetailsComponent,
    ],
    exports: [
        UserDetailsComponent, // Le seul utilisé là ou est importeé le module
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        CommonModule, 
        MatButtonModule,
        MatFormFieldModule,
    ]
})
export class TaskModule {

}