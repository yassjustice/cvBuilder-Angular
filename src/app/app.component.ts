import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { SideBarLayoutComponent } from './layouts/side-bar-layout/side-bar-layout.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { PdfService } from './utils/pdf-generator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    // private http: HttpClient, 
    // private pdfService: PdfService,
  ) {}
  title = 'cvBuilder';
}
