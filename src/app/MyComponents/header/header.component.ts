import { Component } from '@angular/core';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopmenuComponent,MainmenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
