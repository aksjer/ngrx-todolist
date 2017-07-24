import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as fromRoot from '../reducers';
import * as fromTodo from '../actions/todo';
import * as fromLayout from '../actions/layout';
import { TodoService } from '../services/todo.service';
import 'rxjs/add/operator/switchmap';
import 'rxjs/add/operator/mergemap';
import 'rxjs/add/operator/do';
import { Todo } from '../models/todo';
import { TODO_SEARCH, TODO_SEARCH_SUCCESS } from '../actions/todo';

@Injectable()
export class TodoEffects {

  constructor(
    private _actions$: Actions,
    private _todoService: TodoService,
    private _store: Store<fromRoot.State>
  ) { }

  @Effect()
  todoLoad: Observable<Action> = this._actions$
    .ofType(fromTodo.TODO_LOAD)
    .do(() => this.loadingBarOn())
    .switchMap(() => this._todoService.getAll())
    .map((todos: Todo[]) => new fromTodo.TodoLoadSuccessAction(todos));

  @Effect()
  todoSearch$: Observable<Action> = this._actions$
    .ofType(fromTodo.TODO_SEARCH)
    .do(() => this.loadingBarOn())
    .map(toPayload)
    .switchMap(term => this._todoService.search(term))
    .map((todos: Todo[]) => new fromTodo.TodoSearchSuccessAction(todos));

  @Effect()
  deleteTodo$: Observable<Action> = this._actions$
    .ofType(fromTodo.TODO_DELETE)
    .map(toPayload)
    .switchMap((id: string) => this._todoService.delete(id))
    .mergeMap((id: string) => [
      new fromTodo.TodoDeleteSuccessAction(id),
      new fromLayout.SnackBarOpenAction('Delete success!')
    ]);

  @Effect()
  success$: Observable<Action> = this._actions$
    .ofType(fromTodo.TODO_LOAD_SUCCESS, fromTodo.TODO_SEARCH_SUCCESS)
    .map(() => new fromLayout.LoadingBarOffAction());

  loadingBarOn() {
    this._store.dispatch(new fromLayout.LoadingBarOnAction());
  }

}
