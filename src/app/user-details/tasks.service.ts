import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTaskData, Task } from "./task/task.model";

@Injectable({providedIn:'root'})
export class TaskService {

    // Dummytasks si pas de tasks dans le localStorage
    private tasks:Task[] = dummyTasks;

    // Si tasks dans le localStorage -> chargement des tasks
    constructor() {
        const tasks = localStorage.getItem('tasks');

        if(tasks) {
            this.tasks = JSON.parse(tasks)
        }
    };

    getUserTasks(userId:string):Task[] {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData:NewTaskData, userId:string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
          });
          this.saveTasks();
    }

    removeTask(taskId:string) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.saveTasks();
    }


    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }


}