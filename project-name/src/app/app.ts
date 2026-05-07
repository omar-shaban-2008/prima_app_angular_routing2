import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-name');
}

{ path: '', redirectTo: '/animals', pathMatch: 'full' },

{ path: 'generic/:id', component: GenericComponent },

{ path: 'generic/:id', component: GenericComponent },