import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements AfterViewInit {
  clubName = 'Elite Robotique';

  whyChooseUsPoints: string[] = [
    'Expertise reconnue dans notre domaine',
    'Équipe professionnelle et passionnée',
    'Activités variées et adaptées à tous',
    'Ambiance conviviale et dynamique'
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: Element) => observer.observe(el));
  }

  rejoindre() {
    alert('Merci de vouloir rejoindre notre club!');
  }
}
