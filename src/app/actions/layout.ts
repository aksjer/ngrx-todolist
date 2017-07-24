import { Action } from '@ngrx/store';

export const MENU_OPEN = '[Menu] Open';
export const MENU_CLOSE = '[Menu] Close';
export const LOADING_BAR_ON = '[Loading Bar] On';
export const LOADING_BAR_OFF = '[Loading Bar] Off';
export const ADD_BTN_ICON_CHANGE = '[Add Button Icon] Change';

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

export type Action = MenuOpenAction
  | MenuCloseAction
  | LoadingBarOnAction
  | LoadingBarOffAction
  | AddBtnIconChangeAction;
