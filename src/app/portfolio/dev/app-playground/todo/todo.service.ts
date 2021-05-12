import { Injectable } from '@angular/core';
import Todo from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Array<Todo> = [];
  constructor() { }

  onCreatedTodo(): void {
    this.todoList.push();
    console.log(this.todoList);
  }

  onRemoveTodo({ todo }): void {
    this.todoList.forEach(todoItem => {
      if (todoItem.task === todo.task) {
        const target = this.todoList.indexOf(todoItem);
        this.todoList.splice(target, 1);
      }
    });
  }

  getTodoById(id: number): Todo {
    for (const todo of this.todoList) {
      if (id === todo.id) {
        return todo;
      }
    }
  }

  getFirstTodo(): Todo {
    const firstTodo: Todo = this.todoList[0];
    return firstTodo;
  }

  getLastTodo(): Todo {
    const lastTodo: Todo = this.todoList[this.todoList.length - 1];
    return lastTodo;
  }

  getNumberOfTodos(): number {
    const NumberOfTodos: number = this.todoList.length;
    return NumberOfTodos;
  }

  generateNewTodoId(): number {
    const lastTodo = this.getLastTodo();
    let newTodoId: number;
    if (lastTodo) {
      newTodoId = lastTodo.id + 1;
    } else {
      newTodoId = 1;
    }
    return newTodoId;
  }

  sortTodosFromFirstToLast(arrayToBeSorted: Array<Todo>): Array<Todo> {
    const sortedArray = arrayToBeSorted.sort((a, b) => a.id - b.id);
    return sortedArray;
  }

  sortTodosFromLastToFirst(arrayToBeSorted: Array<Todo>): Array<Todo> {
    const sortedArray = arrayToBeSorted.sort((a, b) => b.id - a.id);
    return sortedArray;
  }
}
