import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [HeaderLayoutComponent, RouterModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent {

}
