import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  title = '';
  id!: number;
  @Input('selectedTodo') set selectedTodo(value: ITodo) {
    this.title = value.title;
    this.id = value.id;
  }

  @Output() updateTodo = new EventEmitter<{ id: number; newTitle: string }>();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(e: any): void {
    e.preventDefault();
    console.log('t');
    this.updateTodo.emit({
      id: this.id,
      newTitle: this.title,
    });
  }
}
