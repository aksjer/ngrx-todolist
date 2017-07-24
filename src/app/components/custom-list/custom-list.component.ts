import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CustomListItem } from '../../models/custom-list/custom-list-item';
import { CustomListItemOptionsEvent } from '../../models/custom-list/custom-list-item-options-event';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent {

  @Input() items: CustomListItem[];
  @Output('actionsEvent')
  actionsEvent: EventEmitter<CustomListItemOptionsEvent> =
  new EventEmitter<CustomListItemOptionsEvent>();
  @Output('searchEvent') searchEvent = new EventEmitter<string>();

  action(type: string, id: string) {
    this.actionsEvent.emit({ type, id });
  }

  search(term: string) {
    this.searchEvent.emit(term);
  }

}
