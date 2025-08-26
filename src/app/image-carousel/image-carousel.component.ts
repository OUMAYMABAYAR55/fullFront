import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  images = [
    { 
      src: 'assets/carousel/robot1.jpg', 
      alt: 'Atelier robotique' 
    },
    { 
      src: 'assets/carousel/robot2.jpg', 
      alt: 'Enfants programmant' 
    },
    { 
      src: 'assets/carousel/robot3.jpg', 
      alt: 'Compétition' 
    },
    { 
      src: 'assets/carousel/robot4.jpg', 
      alt: 'Création de robots' 
    }
  ];
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}