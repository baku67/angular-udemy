import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTaskData, Task } from "./task/task.model";

@Injectable({providedIn:'root'})
export class TaskService {

    private tasks:Task[] = dummyTasks;

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
    }

    removeTask(taskId:string) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }

}