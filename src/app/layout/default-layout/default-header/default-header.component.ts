import { NgTemplateOutlet, DatePipe, CommonModule } from '@angular/common';
import { Component, computed, inject, input, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

import {
  AvatarComponent,
  BadgeComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  SidebarToggleDirective
} from '@coreui/angular';

import { IconDirective } from '@coreui/icons-angular';

// Elite Robotique Interfaces
interface EliteNotification {
  id: number;
  type: 'urgent' | 'regular';
  title: string;
  message: string;
  time: Date;
  link: string;
  icon?: string;
  read?: boolean;
}

interface EliteUser {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  lastActivity: Date;
}

interface DashboardStats {
  totalMembers: number;
  todayPresence: number;
  pendingPayments: number;
  pendingRegistrations: number;
}

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  imports: [
    CommonModule,
    DatePipe,
    ContainerComponent,
    HeaderTogglerDirective,
    SidebarToggleDirective,
    IconDirective,
    HeaderNavComponent,
    NavItemComponent,
    NavLinkDirective,
    RouterLink,
    RouterLinkActive,
    NgTemplateOutlet,
    BreadcrumbRouterComponent,
    DropdownComponent,
    DropdownToggleDirective,
    AvatarComponent,
    DropdownMenuDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    BadgeComponent,
    DropdownDividerDirective
  ],
  styleUrls: ['./default-header.component.scss']
})
export class EliteHeaderComponent extends HeaderComponent implements OnInit, OnDestroy {

  readonly #colorModeService = inject(ColorModeService);
  readonly #router = inject(Router);
  
  readonly colorMode = this.#colorModeService.colorMode;
  
  // Signals for reactive data
  readonly currentTime = signal(new Date());
  readonly dashboardStats = signal<DashboardStats>({
    totalMembers: 125,
    todayPresence: 45,
    pendingPayments: 8,
    pendingRegistrations: 12
  });
  readonly notifications = signal<EliteNotification[]>([]);

  private timeSubscription?: Subscription;

  readonly colorModes = [
    { name: 'light', text: 'Clair', icon: 'cilSun' },
    { name: 'dark', text: 'Sombre', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode => mode.name === currentMode)?.icon ?? 'cilSun';
  });

  // Current user information
  readonly currentUser: EliteUser = {
    id: 1,
    name: 'Sarah Trabelsi',
    email: 'sarah.trabelsi@eliterobot.tn',
    role: 'Secrétaire',
    avatar: './assets/images/avatars/secretaire.jpg',
    lastActivity: new Date()
  };

  // Computed properties
  readonly notificationCount = computed(() => 
    this.notifications().filter(n => !n.read).length
  );

  readonly urgentNotifications = computed(() => 
    this.notifications().filter(n => n.type === 'urgent' && !n.read)
  );

  readonly regularNotifications = computed(() => 
    this.notifications().filter(n => n.type === 'regular' && !n.read).slice(0, 5)
  );

  readonly pendingPayments = computed(() => this.dashboardStats().pendingPayments);
  readonly pendingRegistrations = computed(() => this.dashboardStats().pendingRegistrations);
  readonly totalMembers = computed(() => this.dashboardStats().totalMembers);
  readonly todayPresence = computed(() => this.dashboardStats().todayPresence);
  readonly lastActivity = computed(() => this.currentUser.lastActivity);

  constructor() {
    super();
    this.initializeNotifications();
  }

  sidebarId = input('sidebar1');

  ngOnInit(): void {
    // Update current time every minute
    this.timeSubscription = interval(60000).subscribe(() => {
      this.currentTime.set(new Date());
    });

    // Load dashboard statistics
    this.loadDashboardStats();
    
    // Load notifications
    this.loadNotifications();
  }

  ngOnDestroy(): void {
    this.timeSubscription?.unsubscribe();
  }

  private initializeNotifications(): void {
    const initialNotifications: EliteNotification[] = [
      {
        id: 1,
        type: 'urgent',
        title: 'Paiement en retard critique',
        message: 'Ahmed Ben Ali - Retard de paiement de plus de 30 jours',
        time: new Date(Date.now() - 30 * 60000), // 30 minutes ago
        link: '/secretaire/paiements/retard',
        icon: 'cilWarning',
        read: false
      },
      {
        id: 2,
        type: 'urgent',
        title: 'Inscription incomplète',
        message: 'Documents manquants pour Fatma Khelifi',
        time: new Date(Date.now() - 2 * 60 * 60000), // 2 hours ago
        link: '/secretaire/inscription/attente',
        icon: 'cilExclamationTriangle',
        read: false
      },
      {
        id: 3,
        type: 'regular',
        title: 'Nouveau membre inscrit',
        message: 'Youssef Gharbi a rejoint le cours de robotique avancée',
        time: new Date(Date.now() - 4 * 60 * 60000), // 4 hours ago
        link: '/secretaire/membres/liste',
        icon: 'cilUserPlus',
        read: false
      },
      {
        id: 4,
        type: 'regular',
        title: 'Paiement reçu',
        message: 'Leila Bouazizi - Paiement mensuel confirmé',
        time: new Date(Date.now() - 8 * 60 * 60000), // 8 hours ago
        link: '/secretaire/paiements/historique',
        icon: 'cilCheck',
        read: false
      },
      {
        id: 5,
        type: 'regular',
        title: 'Rapport hebdomadaire',
        message: 'Le rapport de présences de la semaine est disponible',
        time: new Date(Date.now() - 24 * 60 * 60000), // 1 day ago
        link: '/secretaire/rapports/presences',
        icon: 'cilDescription',
        read: false
      }
    ];

    this.notifications.set(initialNotifications);
  }

  private loadDashboardStats(): void {
    // Simulate API call to load dashboard statistics
    // In real app, this would be an HTTP request
    setTimeout(() => {
      this.dashboardStats.set({
        totalMembers: 125,
        todayPresence: 45,
        pendingPayments: 8,
        pendingRegistrations: 12
      });
    }, 1000);
  }

  private loadNotifications(): void {
    // Simulate periodic notification updates
    setInterval(() => {
      const currentNotifications = this.notifications();
      const hasNewNotification = Math.random() > 0.95; // 5% chance every check
      
      if (hasNewNotification && currentNotifications.length < 10) {
        const newNotification: EliteNotification = {
          id: Date.now(),
          type: Math.random() > 0.8 ? 'urgent' : 'regular',
          title: this.generateRandomNotificationTitle(),
          message: this.generateRandomNotificationMessage(),
          time: new Date(),
          link: '/secretaire/dashboard',
          read: false
        };
        
        this.notifications.set([newNotification, ...currentNotifications]);
      }
    }, 30000); // Check every 30 seconds
  }

  private generateRandomNotificationTitle(): string {
    const titles = [
      'Nouvelle inscription en attente',
      'Paiement reçu',
      'Absence répétée détectée',
      'Cours annulé',
      'Nouveau message reçu',
      'Rapport mensuel disponible'
    ];
    return titles[Math.floor(Math.random() * titles.length)];
  }

  private generateRandomNotificationMessage(): string {
    const messages = [
      'Une nouvelle demande d\'inscription nécessite votre attention',
      'Un paiement mensuel a été confirmé avec succès',
      'Un membre a plusieurs absences consécutives',
      'Le cours de robotique de demain est reporté',
      'Vous avez reçu un nouveau message important',
      'Le rapport mensuel des activités est prêt'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Event handlers
  onNotificationClick(notification: EliteNotification): void {
    // Mark notification as read
    const updatedNotifications = this.notifications().map(n => 
      n.id === notification.id ? { ...n, read: true } : n
    );
    this.notifications.set(updatedNotifications);
    
    // Navigate to the relevant page
    this.#router.navigate([notification.link]);
  }

  onMarkAllNotificationsRead(): void {
    const updatedNotifications = this.notifications().map(n => ({ ...n, read: true }));
    this.notifications.set(updatedNotifications);
  }

  logout(): void {
    // Implement logout logic
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      // Clear user session
      localStorage.removeItem('elite_user_token');
      sessionStorage.clear();
      
      // Redirect to login
      this.#router.navigate(['/login']);
    }
  }

  // Quick action methods
  onQuickAddMember(): void {
    this.#router.navigate(['/secretaire/inscription/nouvelle']);
  }

  onQuickAddPayment(): void {
    this.#router.navigate(['/secretaire/paiements/enregistrer']);
  }

  onQuickMarkPresence(): void {
    this.#router.navigate(['/secretaire/presences/marquer']);
  }

  onExportData(): void {
    this.#router.navigate(['/secretaire/rapports/export']);
  }

  // Utility methods
  getNotificationIcon(notification: EliteNotification): string {
    return notification.icon || (notification.type === 'urgent' ? 'cilWarning' : 'cilInfo');
  }

  getNotificationClass(notification: EliteNotification): string {
    return `notification-item ${notification.type === 'urgent' ? 'urgent' : ''}`;
  }

  formatTime(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'À l\'instant';
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    if (diffDays < 7) return `Il y a ${diffDays}j`;
    return date.toLocaleDateString('fr-FR');
  }

  // Theme management
  onThemeChange(mode: string): void {
    this.#colorModeService.colorMode.set(mode as any);
  }

  // Navigation helpers
  isRouteActive(route: string): boolean {
    return this.#router.url.includes(route);
  }

  // Profile management
  onProfileClick(): void {
    this.#router.navigate(['/secretaire/profil']);
  }

  onSettingsClick(): void {
    this.#router.navigate(['/secretaire/config']);
  }

  onHelpClick(): void {
    this.#router.navigate(['/secretaire/aide']);
  }
}