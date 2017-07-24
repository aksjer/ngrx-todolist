import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menuItem';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers';
import { Store } from '@ngrx/store';
import * as fromLayout from './actions/layout';
import { MdSnackBar } from '@angular/material';
import { SnackbarModel } from './models/snackbar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuItems: MenuItem[] = [
    { path: '/home', text: 'Home' },
    { path: '/todo', text: 'Todos' }
  ];
  menuOpened$: Observable<boolean>;
  loadingBar$: Observable<boolean>;
  addBtnIcon$: Observable<string>;

  constructor(
    private _store: Store<fromRoot.State>,
    private _mdSnackBar: MdSnackBar,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menuOpened$ = this._store.select(fromRoot.getMenuState);
    this.loadingBar$ = this._store.select(fromRoot.getLoadingBarState);
    this.addBtnIcon$ = this._store.select(fromRoot.getAddBtnIcon);
    this._store.select(fromRoot.getSnackbarState).subscribe((snackbar: SnackbarModel) => {
      if (snackbar.opened) {
        this._mdSnackBar
          .open(snackbar.text, null, { duration: 4000 })
          .afterDismissed()
          .subscribe(() => this._store.dispatch(new fromLayout.SnackBarCloseAction()));
      }
    });
  }

  menuOpen() {
    this._store.dispatch(new fromLayout.MenuOpenAction());
  }

  menuClose() {
    this._store.dispatch(new fromLayout.MenuCloseAction());
  }

  add() {
    debugger
  }

}
