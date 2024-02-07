import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, SimpleChanges, computed, signal } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { RouterModule } from '@angular/router';
import { BaseSidebarComponent } from '../../components/base-sidebar/base-sidebar.component';

@Component({
  selector: 'app-side-bar-layout',
  standalone: true,
  imports: [NgClass, MatSidenavModule, RouterModule, BaseSidebarComponent, CommonModule],
  templateUrl: './side-bar-layout.component.html',
  styleUrl: './side-bar-layout.component.css'
})
export class SideBarLayoutComponent {
  @Input() sideNavCollapsed! : boolean;
  sideNavWidth: string = '';
  profilePicSize: string = '';
  ngOnChanges(changes: SimpleChanges) {
    if ('sideNavCollapsed' in changes) {
      // console.log('sideNavCollapsed changed:', this.sideNavCollapsed);
      this.sideNavWidth = this.sideNavCollapsed ? '65px' : '250px';
      this.profilePicSize = this.sideNavCollapsed ? '40px' : '100px';
      // console.log('sideNavWidth updated:', this.sideNavWidth);
      // console.log('profilePicSize updated:', this.profilePicSize);
    }
  }
  // @Input() set collapsed(val: boolean) {
  //   this.sideNavCollapsed.set(val);
  // }

}
