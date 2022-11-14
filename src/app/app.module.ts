import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// PrimeNG imports
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';

// Components
import { AppComponent } from './app.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TodoListComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    InputTextModule,
    ButtonModule,
    OrderListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
