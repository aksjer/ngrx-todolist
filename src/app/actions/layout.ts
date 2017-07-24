import { Action } from '@ngrx/store';

export const MENU_OPEN = '[Menu] Open';
export const MENU_CLOSE = '[Menu] Close';
export const LOADING_BAR_ON = '[Loading Bar] On';
export const LOADING_BAR_OFF = '[Loading Bar] Off';
export const ADD_BTN_ICON_CHANGE = '[Add Button Icon] Change';
export const SNACKBAR_OPEN = '[Snack Bar] Open';
export const SNACKBAR_CLOSE = '[Snack Bar] Close';

export class MenuOpenAction implements Action {
  readonly type = MENU_OPEN;
}

export class MenuCloseAction implements Action {
  readonly type = MENU_CLOSE;
}

export class LoadingBarOnAction implements Action {
  readonly type = LOADING_BAR_ON;
}

export class LoadingBarOffAction implements Action {
  readonly type = LOADING_BAR_OFF;
}

export class AddBtnIconChangeAction implements Action {
  readonly type = ADD_BTN_ICON_CHANGE;
  constructor(public payload: string) { }
}

export class SnackBarOpenAction implements Action {
  readonly type = SNACKBAR_OPEN;
  constructor(public payload: string) { }
}

export class SnackBarCloseAction implements Action {
  readonly type = SNACKBAR_CLOSE;
}

export type Action = MenuOpenAction
  | MenuCloseAction
  | LoadingBarOnAction
  | LoadingBarOffAction
  | AddBtnIconChangeAction
  | SnackBarOpenAction
  | SnackBarCloseAction;
