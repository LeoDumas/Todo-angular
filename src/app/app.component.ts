import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-angular';

  newTodo: string = '';
  Todos: string[] = [];

  ngOnInit() {
    this.loadTodos();
  }

  addTodo() {
    if (this.newTodo.trim() === '') {
      alert('You need to add a title');
    } else {
      this.Todos.push(this.newTodo);
      this.newTodo = '';
      this.saveTodos();
    }
  }

  removeTodo(index: number) {
    this.Todos.splice(index, 1);
    this.saveTodos();
  }

  modifyTodo(index: number) {
    const newTitle = prompt('Modify task:', this.Todos[index]);
    if (newTitle !== null) {
      this.Todos[index] = newTitle;
    }
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.Todos));
  }

  loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.Todos = JSON.parse(storedTodos);
    }
  }
}
