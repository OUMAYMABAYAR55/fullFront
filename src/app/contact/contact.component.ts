import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ important pour standalone
  imports: [FormsModule], // ✅ on importe FormsModule ici
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit() {
    alert('Message envoyé !');
  }
}
