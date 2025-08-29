// src/app/views/membres/liste/liste.component.ts
import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AvatarComponent } from '@coreui/angular';

interface Member {
  id: number;
  name: string;
  phone: string;
  group: string;
  joinDate: Date;
  status: 'active' | 'inactive';
  avatar?: string;
}

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  imports: [DatePipe, AvatarComponent],
  standalone: true
})
export class ListeComponent {
  members = signal<Member[]>([
    {
      id: 1,
      name: 'Youssef Gharbi',
      phone: '+216 22 123 456',
      group: 'Avancé',
      joinDate: new Date('2024-03-10'),
      status: 'active',
      avatar: './assets/images/avatars/1.jpg'
    },
    {
      id: 2,
      name: 'Fatma Khelifi',
      phone: '+216 98 765 432',
      group: 'Débutant',
      joinDate: new Date('2024-04-05'),
      status: 'active',
      avatar: './assets/images/avatars/2.jpg'
    },
    {
      id: 3,
      name: 'Ahmed Ben Ali',
      phone: '+216 55 987 654',
      group: 'Intermédiaire',
      joinDate: new Date('2023-11-20'),
      status: 'inactive',
      avatar: './assets/images/avatars/3.jpg'
    }
  ]);

  filteredMembers = this.members;

  onSearch(event: any) {
    const term = event.target.value.toLowerCase();
    const filtered = this.members().filter(m => m.name.toLowerCase().includes(term));
    this.filteredMembers.set(filtered);
  }

  onFilterByStatus(event: any) {
    const status = event.target.value;
    const filtered = status
      ? this.members().filter(m => m.status === status)
      : this.members();
    this.filteredMembers.set(filtered);
  }

  onFilterByGroup(event: any) {
    const group = event.target.value;
    const filtered = group
      ? this.members().filter(m => m.group === group)
      : this.members();
    this.filteredMembers.set(filtered);
  }

  onView(member: Member) {
    console.log('View', member);
  }

  onEdit(member: Member) {
    console.log('Edit', member);
  }

  onDelete(member: Member) {
    if (confirm(`Supprimer ${member.name} ?`)) {
      const updated = this.members().filter(m => m.id !== member.id);
      this.members.set(updated);
      this.filteredMembers.set(updated);
    }
  }
}