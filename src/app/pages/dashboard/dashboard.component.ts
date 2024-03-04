import { Component, computed, signal, Input, NgModule } from '@angular/core';
import { SideBarLayoutComponent } from '../../layouts/side-bar-layout/side-bar-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideBarLayoutComponent, MatToolbarModule, MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // colapsed = signal(false);
  // sideNavWidthD: any = computed(() => (this.colapsed() ? '65px' : '250px'));
  collapsed: boolean = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
