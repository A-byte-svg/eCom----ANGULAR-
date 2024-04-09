import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'mainmenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {
mainMenuItems:string[]=['Home','Products','Sale','New Arrival','Contact']
}
