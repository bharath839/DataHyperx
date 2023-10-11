import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showSubmenu: boolean = false;
  submenuItems: string[] = ['Submenu item 1', 'Submenu item 2', 'Submenu item 3','Submenu item 4', 'Submenu item 5', 'Submenu item '];

  getImagePath(): string {
    return '/assets/HyperX_logo_PNG2.png'; // Replace with the correct path to your image
  }
  getArrowPath():string{
    return'/assets/icons8-arrow-50.png';
  }
}
