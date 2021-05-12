import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Todo from './models/todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  form: FormGroup;
  priorityList: Array<string> = ['Low Priority', 'Medium Priority', 'High Priority'];
  haveDescription = false;

  constructor(public todoService: TodoService) {
    this.form = new FormGroup({
      task: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      description: new FormControl('', ),
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    const task = this.form.value.task;
    const priority = this.form.value.priority;
    const id = this.todoService.generateNewTodoId();
    const description = this.form.value.description;
    const todo = new Todo(task, priority, id, this.haveDescription, description);
    this.todoService.todoList.push(todo);
  }

  toggleHaveDescription(): void {
    this.haveDescription = !this.haveDescription;
  }

  piorityColor(priority: string): string {
    switch (priority) {
      case 'Low Priority':
        return 'text-success';
      case 'Medium Priority':
        return 'text-warning';
      case 'High Priority':
        return 'text-danger';
    }
  }
}
