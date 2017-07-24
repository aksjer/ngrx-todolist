import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromTodo from '../../actions/todo';
import * as fromLayout from '../../actions/layout';
import { ActivatedRoute } from '@angular/router';
import { CustomListItemOptionsEvent } from '../../models/custom-list/custom-list-item-options-event';
import { TodoDeleteAction } from '../../actions/todo';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(
    private _store: Store<fromRoot.State>

  ) { }

  ngOnInit() {
    this.todos$ = this._store.select(fromRoot.getTodos);
    this._store.dispatch(new fromTodo.TodoLoadAction());
    this._store.dispatch(new fromLayout.AddBtnIconChangeAction('note_add'));
  }

  search(term: string) {
    this._store.dispatch(new fromTodo.TodoSearchAction(term));
  }

  action(action: CustomListItemOptionsEvent) {
    switch (action.type) {
      case 'edit':

        break;
      case 'delete':
        this._store.dispatch(new fromTodo.TodoDeleteAction(action.id));
        break;
    }
  }

}
