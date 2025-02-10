import { Routes } from '@angular/router';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {authGuard} from "./auth.guard";
import {TodoCreateComponent} from "./components/todo-create/todo-create.component";
import {TodoUpdateComponent} from "./components/todo-update/todo-update.component";

export const routes: Routes = [

  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: '',
    canActivate: [authGuard],
    component: TodoListComponent
  },
  {
    path: 'create-todo',
    component: TodoCreateComponent
  },
  {
    path: 'update-todo/:todoId',
    component: TodoUpdateComponent
  }
];
