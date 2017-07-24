import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromLayout from '../../actions/layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(
    private _store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this._store.dispatch(new fromLayout.AddBtnIconChangeAction('add'));
  }

}
