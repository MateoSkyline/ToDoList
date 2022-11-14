import { Injectable } from '@angular/core';
import { Gig } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  readTasks() : Gig[] {
    var storage = localStorage.getItem("tasks");
    var tasks: Gig[] = JSON.parse(storage!);
    return tasks;
  }

  saveTasks(tasks: Gig[]) : void {
    var storage = JSON.stringify(tasks);
    localStorage.setItem("tasks", storage);
  }

  saveTask(task: Gig) : void {
    var tasks: Gig[] = this.readTasks();
    if(tasks == undefined)
      tasks = [];
    tasks.unshift(task);
    this.saveTasks(tasks);
  }

  markDone(id: string) : void {
    var tasks = this.readTasks();
    var index = tasks.findIndex(x => x.id == id);
    tasks[index].done = true;
    tasks.push(tasks.splice(index, 1)[0]);
    this.saveTasks(tasks);
  }

  markUndone(id: string) : void {
    var tasks = this.readTasks();
    var index = tasks.findIndex(x => x.id == id);
    tasks[index].done = false;
    tasks.unshift(tasks.splice(index, 1)[0]);
    this.saveTasks(tasks);
  }

  deleteTask(id: string) : void {
    var tasks = this.readTasks();
    tasks = tasks.filter(x => x.id !== id);
    this.saveTasks(tasks);
  }
}
