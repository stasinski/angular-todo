import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  title = '';

  @Output() addTodo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(e: any): void {
    e.preventDefault();
    this.addTodo.emit(this.title);
    this.title = '';
  }
}
