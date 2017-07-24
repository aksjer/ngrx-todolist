import { Priority } from './priority';

export interface Todo {
  id: string;
  text: string;
  finish: boolean;
  priority: Priority;
}
