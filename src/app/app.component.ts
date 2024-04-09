import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './MyComponents/header/header.component';
import { ContainerComponent } from './MyComponents/container/container.component'
import { TopheaderComponent } from './MyComponents/topheader/topheader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopheaderComponent, HeaderComponent,ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome TO My First Angular Project..';
}
