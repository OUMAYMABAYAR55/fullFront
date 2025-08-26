import { Component } from '@angular/core';

@Component({
  selector: 'app-age46',
  templateUrl: './age46.component.html',
  styleUrls: ['./age46.component.css']
})
export class Age46Component {
  selected: number | null = null;

  toggle(index: number) {
    this.selected = this.selected === index ? null : index;
  }
}
