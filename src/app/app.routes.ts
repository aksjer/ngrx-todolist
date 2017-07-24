import { Routes } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { TodoPageComponent } from './containers/todo-page/todo-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'todo', component: TodoPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
