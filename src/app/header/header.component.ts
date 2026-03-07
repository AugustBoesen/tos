import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems = [
    { name: 'Home', link: '/' },
    { name: 'OPEN TERMINAL', link: '/terminal' },
    { name: 'for_elaine.dat', link: '/log2394873249857329847' },
    // { name: 'Registry', link: '/registry' },
  ];

  constructor() {}

  ngOnInit() {
    this.navItems.forEach((item) => {
      console.log(item.name);
    });
  }
}
