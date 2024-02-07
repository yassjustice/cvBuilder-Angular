import { Component, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';

export type MenuItems = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-base-sidebar',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './base-sidebar.component.html',
  styleUrl: './base-sidebar.component.css',
})
export class BaseSidebarComponent {
  @Input() profileSize!: string;
  menuItems = signal<MenuItems[]>([
    {
      icon: 'edit',
      label: 'Editor',
      route: './editor',
    },
    {
      icon: 'insert_drive_file',
      label: 'Templates',
      route: './templates',
    },
    {
      icon: 'dashboard',
      label: 'Work Station',
      route: './workStation',
    },
    {
      icon: 'apps',
      label: 'Services',
      route: './services',
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: './settings',
    },
  ]);
  @Input() baseCollapsed!: boolean;
}
