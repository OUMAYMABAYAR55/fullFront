import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';  // <-- ajoute ceci
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ImageCarouselComponent,
    DescriptionComponent,
    FooterComponent   // <-- ajoute Footer ici
  ],
  animations: [slideInAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
