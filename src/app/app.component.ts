import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from './models/menuItem';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers';
import { Store } from '@ngrx/store';
import { MenuOpenAction, MenuCloseAction } from './actions/layout';

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
    private _store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.menuOpened$ = this._store.select(fromRoot.getMenuState);
    this.loadingBar$ = this._store.select(fromRoot.getLoadingBarState);
    this.addBtnIcon$ = this._store.select(fromRoot.getAddBtnIcon);
  }

  menuOpen() {
    this._store.dispatch(new MenuOpenAction());
  }

  menuClose() {
    this._store.dispatch(new MenuCloseAction());
  }

}
