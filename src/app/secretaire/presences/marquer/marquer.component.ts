// src/app/views/presences/marquer/marquer.component.ts
import { Component, signal } from '@angular/core';

interface Member {
  id: number;
  name: string;
}

@Component({
  selector: 'app-marquer',
  templateUrl: './marquer.component.html',
  standalone: true
})
export class MarquerComponent {
  currentGroup = signal<Member[]>([
    { id: 1, name: 'Youssef Gharbi' },
    { id: 2, name: 'Fatma Khelifi' }
  ]);
}