import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';
import { Priority } from '../models/priority';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctuntilchanged';
import { SharedService } from './shared.service';

@Injectable()
export class TodoService {

  private delay = 1000;

  constructor(
    private _sharedService: SharedService
  ) { }

  getAll(): Observable<Todo[]> {
    return Observable
      .of(FAKE_TODOS)
      .delay(this.delay);
  }

  get(id: string): Observable<Todo> {
    return Observable
      .of(FAKE_TODOS)
      .map((todos: Todo[]) => todos.find((todo: Todo) => todo.id === id))
      .delay(this.delay);
  }

  add(todo: Todo): void {
    FAKE_TODOS.push(Object.assign({}, todo, { id: this._sharedService.guid() }));
  }

  update(id: string, todo: Todo) {
    const old = FAKE_TODOS.find((t: Todo) => t.id === id);
    old.text = todo.text;
    old.priority = todo.priority;
    old.finish = todo.finish;
  }

  delete(id: string) {
    debugger
    FAKE_TODOS = FAKE_TODOS.filter((todo: Todo) => todo.id !== id);
    return id;
  }

  search(term: string): Observable<Todo[]> {
    return Observable
      .of(FAKE_TODOS)
      .delay(this.delay)
      .distinctUntilChanged()
      .map((todos: Todo[]) => todos.filter((todo: Todo) =>
        todo.text.toLowerCase().includes(term.toLowerCase())));
  }

}

let FAKE_TODOS: Todo[] = [
  { id: 'cdc0b5e7-f7a8', text: 'morning', priority: Priority.Medium, finish: true },
  { id: '46812194-b210', text: 'eat', priority: Priority.Low, finish: false },
  { id: '9e10991b-5f51', text: 'coffee', priority: Priority.High, finish: false },
  { id: 'a330f6c5-443a', text: 'sleep', priority: Priority.High, finish: false }
];
