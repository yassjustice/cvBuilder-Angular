import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { SideBarLayoutComponent } from './layouts/side-bar-layout/side-bar-layout.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, PageLayoutComponent, SideBarLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cvBuilder';
}

