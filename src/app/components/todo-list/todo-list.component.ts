import { Component, OnInit } from '@angular/core';
import { Gig } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  tasks: Gig[] = [];

  ngOnInit(): void {
  }

  refreshList() : void {
    
  }
}
