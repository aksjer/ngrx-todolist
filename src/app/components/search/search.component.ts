import { Component, OnInit, Input, ViewChild, ElementRef, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromevent';
import 'rxjs/add/operator/debouncetime';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input() placeholder: string;
  @ViewChild('search') search: ElementRef;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = Observable
      .fromEvent(this.search.nativeElement, 'keyup')
      .debounceTime(300)
      .map((event: any) => event.target.value)
      .subscribe(term => this.searchEvent.emit(term));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
