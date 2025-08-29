import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: 'home',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'primary',
      text: 'ACCUEIL'
    }
  },
  {
    name: 'Gestion',
    title: true
  },
  {
    name: 'Membres',
    url: 'membres',
    iconComponent: { name: 'cil-people' },
    children: [
      {
        name: 'Liste des membres',
        url: 'membres/liste',
        iconComponent: { name: 'cil-list' }
      },
      {
        name: 'Nouveau membre',
        url: 'membres/nouveau',
        iconComponent: { name: 'cil-user-plus' }
      },
      {
        name: 'Membres inactifs',
        url: 'membres/inactifs',
        iconComponent: { name: 'cil-user-unfollow' }
      }
    ]
  },
  {
    name: 'Inscription',
    url: 'inscription',
    iconComponent: { name: 'cil-clipboard' },
    children: [
      {
        name: 'Nouvelle inscription',
        url: 'inscription/nouvelle',
        iconComponent: { name: 'cil-plus' }
      },
      {
        name: 'En attente',
        url: 'inscription/attente',
        badge: {
          color: 'warning',
          text: '12'
        },
        iconComponent: { name: 'cil-alarm' }
      },
      {
        name: 'Historique',
        url: 'inscription/historique',
        iconComponent: { name: 'cil-history' }
      }
    ]
  },
  {
    name: 'Financier',
    title: true
  },
  {
    name: 'Paiements',
    url: 'paiements',
    iconComponent: { name: 'cil-wallet' },
    children: [
      {
        name: 'Enregistrer',
        url: 'paiements/enregistrer',
        iconComponent: { name: 'cil-dollar' }
      },
      {
        name: 'Historique',
        url: 'paiements/afficher',
        iconComponent: { name: 'cil-list' }
      },
      {
        name: 'En retard',
        url: 'paiements/retard',
        badge: {
          color: 'danger',
          text: '8'
        },
        iconComponent: { name: 'cil-calendar' }
      },
      {
        name: 'Rapports',
        url: 'paiements/rapports',
        iconComponent: { name: 'cil-chart' }
      }
    ]
  },
  {
    name: 'Suivi',
    title: true
  },
  {
    name: 'Présences',
    url: 'presences',
    iconComponent: { name: 'cil-check-circle' },
    children: [
      {
        name: 'Marquer',
        url: 'presences/marquer',
        iconComponent: { name: 'cil-check' }
      },
      {
        name: 'Absences répétées',
        url: 'presences/absences',
        badge: {
          color: 'warning',
          text: '5'
        },
        iconComponent: { name: 'cil-warning' }
      }
    ]
  },
  {
    name: 'Activités',
    url: 'activites',
    iconComponent: { name: 'cil-calendar' },
    children: [
      {
        name: 'Certificates',
        url: 'activites/certificates',
        iconComponent: { name: 'cil-people' }
      },
      {
        name: 'Événements',
        url: 'activites/evenements',
        iconComponent: { name: 'cil-calendar-check' }
      }
    ]
  },
  {
    name: 'Communication',
    title: true
  },
  {
    name: 'Notifications',
    url: 'notifications',
    iconComponent: { name: 'cil-bell' }
    // No children — single page
  },
  {
    name: 'Rapports',
    title: true
  },
  {
    name: 'Statistiques',
    url: 'rapports',
    iconComponent: { name: 'cil-chart-pie' },
    children: [
      {
        name: 'Présences',
        url: 'rapports/presences',
        iconComponent: { name: 'cil-user-check' }
      },
      {
        name: 'Financier',
        url: 'rapports/financier',
        iconComponent: { name: 'cil-bank' }
      }
    ]
  },
  {
    title: true,
    name: 'Paramètres',
    class: 'mt-auto'
  },
  {
    name: 'Configuration',
    url: 'config',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Profil',
        url: 'config/profil',
        iconComponent: { name: 'cil-user' }
      },
      {
        name: 'Système',
        url: 'config/systeme',
        iconComponent: { name: 'cil-monitor' }
      }
    ]
  },
  {
    name: 'Aide',
    url: 'aide',
    iconComponent: { name: 'cil-info' },
    children: [
      {
        name: 'Guide',
        url: 'aide/guide',
        iconComponent: { name: 'cil-book' }
      },
      {
        name: 'FAQ',
        url: 'aide/faq',
        iconComponent: { name: 'cil-life-ring' }
      },
      {
        name: 'Support',
        url: 'aide/contact',
        iconComponent: { name: 'cil-headphones' }
      }
    ]
  }
];