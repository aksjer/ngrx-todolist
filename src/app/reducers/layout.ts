import * as fromLayout from '../actions/layout';
import { SnackbarModel } from '../models/snackbar';

export interface State {
  menuOpened: boolean;
  loadingBar: boolean;
  addBtnIcon: string;
  snackbarModel: SnackbarModel;
}

const initialState: State = {
  menuOpened: false,
  loadingBar: false,
  addBtnIcon: 'add',
  snackbarModel: new SnackbarModel()
};

export const reducer = (state: State = initialState, action: fromLayout.Action): State => {
  console.log(action);
  switch (action.type) {
    case fromLayout.MENU_OPEN:
      return Object.assign({}, state, { menuOpened: true });
    case fromLayout.MENU_CLOSE:
      return Object.assign({}, state, { menuOpened: false });
    case fromLayout.LOADING_BAR_ON:
      return Object.assign({}, state, { loadingBar: true });
    case fromLayout.LOADING_BAR_OFF:
      return Object.assign({}, state, { loadingBar: false });
    case fromLayout.ADD_BTN_ICON_CHANGE:
      return Object.assign({}, state, { addBtnIcon: action.payload });
    case fromLayout.SNACKBAR_OPEN:
      return Object.assign({}, state, { snackbarModel: new SnackbarModel(true, action.payload) });
    case fromLayout.SNACKBAR_CLOSE:
      return Object.assign({}, state, { snackbarModel: new SnackbarModel() });
    default:
      return state;
  }
};

export const getMenuState = (state: State): boolean => state.menuOpened;
export const getLoadingBarState = (state: State): boolean => state.loadingBar;
export const getAddBtnIcon = (state: State): string => state.addBtnIcon;
export const getSnackbarState = (state: State): SnackbarModel => state.snackbarModel;
