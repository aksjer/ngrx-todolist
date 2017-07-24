import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export const TODO_LOAD = '[Todo] Load';
export const TODO_LOAD_SUCCESS = '[Todo] Load success';
export const TODO_ADD = '[Todo] Add';
export const TODO_ADD_SUCCESS = '[Todo] Add success';
export const TODO_SEARCH = '[Todo] Search';
export const TODO_SEARCH_SUCCESS = '[Todo] Search success';
export const TODO_DELETE = '[Todo] Delete';
export const TODO_DELETE_SUCCESS = '[Todo] Delete success';

export class TodoLoadAction implements Action {
  readonly type = TODO_LOAD;
}

export class TodoLoadSuccessAction implements Action {
  readonly type = TODO_LOAD_SUCCESS;
  constructor(public payload: Todo[]) { }
}

export class TodoAddAction implements Action {
  readonly type = TODO_ADD;
  constructor(public payload: Todo) { }
}

export class TodoAddSuccessAction implements Action {
  readonly type = TODO_LOAD_SUCCESS;
  constructor(public payload: Todo[]) { }
}

export class TodoSearchAction implements Action {
  readonly type = TODO_SEARCH;
  constructor(public payload: string) { }
}

export class TodoSearchSuccessAction implements Action {
  readonly type = TODO_SEARCH_SUCCESS;
  constructor(public payload: Todo[]) { }
}

export class TodoDeleteAction implements Action {
  readonly type = TODO_DELETE;
  constructor(public payload: string) { }
}

export class TodoDeleteSuccessAction implements Action {
  readonly type = TODO_DELETE_SUCCESS;
  constructor(public payload: string) { }
}

export type Action = TodoLoadAction
  | TodoLoadSuccessAction
  | TodoAddAction
  | TodoSearchAction
  | TodoSearchSuccessAction
  | TodoDeleteAction
  | TodoDeleteSuccessAction;
