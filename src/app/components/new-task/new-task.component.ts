import { Component, EventEmitter } from '@angular/core';
import { Gig } from 'src/app/models/task.model';
import { StorageService } from 'src/app/services/storage.service';
import { v4 as uuidv4 } from 'uuid';
import { Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Output() newTask = new EventEmitter<Gig>();

  constructor(private storageService: StorageService) { }

  task: string = "";

  addTask() : void {
    let task = this.createTask();
    this.storageService.saveTask(task);
    this.clearInput();
    this.newTask.emit(task);
  }

  createTask() : Gig {
    let newTask = new Gig();
    newTask.task = this.task;
    newTask.date = new Date();
    newTask.id = uuidv4();
    return newTask;
  }

  clearInput() : void {
    this.task = "";
  }
}
