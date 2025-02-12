import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./services/auth.service";
import {Title} from "@angular/platform-browser";
import {LoaderComponent} from "./components/loader/loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(protected authService: AuthService,
              titleService: Title) {
    titleService.setTitle("Loading My Todo App")
  }
}
