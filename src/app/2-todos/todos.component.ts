import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
  providers: [],
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any = [];
  message: string = ''; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    // this.service.getTodos().subscribe(t => this.todos = t);

    this.service.getTodosPromise().then(t => {
      console.log("THEN WAS CALLED");
      this.todos = t;
    });
  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id: number) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  } 
}
