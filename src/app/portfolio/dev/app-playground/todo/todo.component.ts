import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelect } from '@angular/material/select';
import Todo from './models/todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @ViewChild('priority') priority: MatSelect;
  @ViewChild('setDescription') setDescription: MatCheckbox;
  @ViewChild('setDate') setDate: MatCheckbox;
  form: FormGroup;
  priorityList: Array<string> = ['Low Priority', 'Medium Priority', 'High Priority'];
  selectedValue: string;
  minDate = new Date();
  constructor(public todoService: TodoService) {
    this.form = new FormGroup({
      task: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      description: new FormControl(),
      setDescription: new FormControl(),
      date: new FormControl(),
      setDate: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.selectedValue = this.priorityList[0];
  }

  test(): void {
    // this.form.value.task
  }

  onSubmit(): void {
    const id = this.todoService.generateNewTodoId();
    const task = this.form.value.task;
    const priority = this.selectedValue;
    const description = this.form.value.description;
    let date: string;
    if (this.setDate.checked) {
      date = this.form.value.date?.toLocaleString();
    } else {
      date = new Date().toDateString();
    }
    const todo = new Todo(id, task, priority, this.setDescription.checked, description, this.setDate.checked, date);
    this.todoService.todoList.push(todo);
    this.form.reset();
    this.form.controls.task.setErrors(null);
    this.priority.options.first.select();
    this.setDescription.checked = false;
    this.setDate.checked = false;
    console.log(this.todoService.todoList);
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
