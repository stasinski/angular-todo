import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ITodo } from './todo';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedTodo: ITodo | null;
  error: string | null;
  todos: ITodo[] = [];

  constructor(private _todosService: TodosService) {
    this.selectedTodo = null;
    this.selectedTodo = null;
    this.error = null;
  }
  ngOnInit(): void {
    this._todosService.getTodos().subscribe(
      (data) => {
        this.todos = data.slice(0, 10);
      },
      (error: HttpErrorResponse) => {
        this.error = error.message;
      }
    );
  }
  handleUpdateTodo(e: { id: number; newTitle: string }) {
    this.selectedTodo = null;
    this.todos = this.todos.map((todo) => {
      if (todo.id === e.id) {
        return {
          ...todo,
          title: e.newTitle,
        };
      }
      return todo;
    });
  }
  handleAddTodo(title: string) {
    this.todos.push({
      id: Math.floor(Math.random() * 1000000),
      completed: false,
      title,
    });
  }
}
