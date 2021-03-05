import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: ITodo[];
  @Input() error: string | null;

  @Output() selectTodoHandler = new EventEmitter<ITodo>();
  @Output() updateTodos = new EventEmitter<ITodo[]>();

  constructor() {
    this.error = null;
    this.todos = [];
  }

  ngOnInit(): void {}

  handleSelect(id: number) {
    this.selectTodoHandler.emit(this.todos.find((todo) => todo.id === id));
  }
  handleDelete(id: number) {
    this.updateTodos.emit(this.todos.filter((todo) => todo.id !== id));
  }
}
