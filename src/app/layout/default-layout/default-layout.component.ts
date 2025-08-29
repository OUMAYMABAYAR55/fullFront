// src/app/layout/default-layout/default-layout.component.ts
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

// 🔹 CoreUI
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';

// 🔹 Local Components
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { EliteHeaderComponent } from './default-header/default-header.component';

// 🔹 Icons (from DASH-SEC)
import { IconSetService } from '@coreui/icons-angular';
import { icons } from '../../icons/icons'; // ✅ Must exist

// 🔹 Nav Items
import { navItems } from './_nav';

// 🔹 Helper
function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ContainerComponent,
    DefaultFooterComponent,
    EliteHeaderComponent,
    IconDirective,
    NgScrollbar,
    RouterOutlet,
    RouterLink,
    ShadowOnScrollDirective
  ]
})
export class DefaultLayoutComponent {
  public navItems = [...navItems];

  // ✅ Inject IconSetService and register icons
  constructor() {
    const iconSetService = inject(IconSetService);
    iconSetService.icons = { ...icons }; // Register all icons
  }
}