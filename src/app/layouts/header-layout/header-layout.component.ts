import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css',
})
export class HeaderLayoutComponent {}
