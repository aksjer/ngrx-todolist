import { Routes } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { TodoPageComponent } from './containers/todo-page/todo-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, data: { title: 'Home', addBtnIcon: 'add' } },
  { path: 'todo', component: TodoPageComponent, data: { title: 'Todo', addBtnIcon: 'note_add' } },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
