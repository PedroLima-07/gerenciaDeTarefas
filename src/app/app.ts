import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSuperior } from "./menu-superior/menu-superior";

@Component({
  imports: [RouterOutlet, MenuSuperior],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gerenciaDeTarefas');
}
