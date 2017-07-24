import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MdIconModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdChipsModule,
  MdCardModule,
  MdSidenavModule,
  MdToolbarModule,
  MdProgressSpinnerModule,
  MdSlideToggleModule,
  MdProgressBarModule,
  MdTooltipModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { TodoPageComponent } from './containers/todo-page/todo-page.component';
import { routes } from './app.routes';
import { reducers } from './reducers';
import { effects } from './effects';
import { SharedService } from './services/shared.service';
import { TodoService } from './services/todo.service';
import { SearchComponent } from './components/search/search.component';
import { CustomListComponent } from './components/custom-list/custom-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TodoPageComponent,
    SearchComponent,
    CustomListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdChipsModule,
    MdCardModule,
    MdSidenavModule,
    MdToolbarModule,
    MdProgressSpinnerModule,
    MdSlideToggleModule,
    MdProgressBarModule,
    MdTooltipModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    FlexLayoutModule
  ],
  providers: [
    SharedService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
