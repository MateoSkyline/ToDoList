import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { Gig } from 'src/app/models/task.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
@Input() newTask!: string;

  constructor(private storageService: StorageService) { }

  tasks: Gig[] = [];
  selectedTask!: Gig[];

  ngOnInit(): void {
    this.getTasks();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getTasks();
  }

  markDone(id: string) : void {
    this.storageService.markDone(id);
    this.getTasks();
  }

  markUndone(id: string) : void {
    this.storageService.markUndone(id);
    this.getTasks();
  }

  deleteTask(id: string) : void {
    this.storageService.deleteTask(id);
    this.getTasks();
  }

  reorderTasks() : void {
    this.storageService.saveTasks(this.tasks);
  }

  getTasks() : void {
    this.tasks = this.storageService.readTasks();
  }
}
