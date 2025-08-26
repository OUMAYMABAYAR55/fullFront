import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, CountUpModule],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  animations: [
    trigger('textAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class DescriptionComponent implements AfterViewInit {
  @ViewChild('statsSection') statsSection!: ElementRef;
  shouldAnimate = false;

  countUpOptions = {
    duration: 2,
    delay: 0.3,
    startVal: 0,
    suffix: ''
  };

  images: string[] = [
    'assets/carousel/robot1.jpg',
    'assets/carousel/robot2.jpg',
    'assets/carousel/robot3.jpg',
    'assets/carousel/robot4.jpg'
  ];

  texts: string[] = [
    'Bienvenue dans notre club',
    'Apprendre en s\'amusant',
    'Robots, créativité et fun',
    'Rejoignez-nous !'
  ];

  // Témoignages à afficher
  temoignages = [
    {
      texte: `En tant qu'ingénieur IA automatisme aujourd'hui, je suis profondément reconnaissante pour mon parcours à Polytechnique de Sousse. Les années passées dans cette école ont été cruciales dans la construction de ma carrière. Polytechnique m’a offert bien plus que des connaissances théoriques et pratiques, Mais ce qui distingue vraiment ma formation, ce sont les professeurs dévoués et expérimentés. Leur expertise et leur soutien inestimable m’ont encouragée à repousser mes limites et à explorer de nouveaux domaines. Aujourd'hui, en tant qu'ingénieur, je tire constamment profit des enseignements et des valeurs inculquées par Polytechnique. Je suis fière de faire partie de cette communauté d’ingénieurs et de transmettre l’héritage de qualité et d’excellence dont j’ai hérité en tant que Polytechnicienne.`,
      nom: 'Soulayman bayoudh',
      poste: ' formateur',
      photo: 'assets/images/soulayman.png'
    },
       {
      texte: `En tant qu'ingénieur mon parcours à Polytechnique de Sousse. Les années passées dans cette école ont été cruciales dans la construction de ma carrière. Polytechnique m’a offert bien plus que des connaissances théoriques et pratiques, Mais ce qui distingue vraiment ma formation, ce sont les professeurs dévoués et expérimentés. Leur expertise et leur soutien inestimable m’ont encouragée à repousser mes limites et à explorer de nouveaux domaines. Aujourd'hui, en tant qu'ingénieur, je tire constamment profit des enseignements et des valeurs inculquées par Polytechnique. Je suis fière de faire partie de cette communauté d’ingénieurs et de transmettre l’héritage de qualité et d’excellence dont j’ai hérité en tant que Polytechnicienne.`,
      nom: 'Wiem Mendili',
      poste: ' développement automatisme à Sagemcom',
      photo: 'assets/images/wiem.png'
    },
       {
      texte: `En technique de Sousse. Les années passées dans cette école ont été cruciales dans la construction de ma carrière. Polytechnique m’a offert bien plus que des connaissances théoriques et pratiques, Mais ce qui distingue vraiment ma formation, ce sont les professeurs dévoués et expérimentés. Leur expertise et leur soutien inestimable m’ont encouragée à repousser mes limites et à explorer de nouveaux domaines. Aujourd'hui, en tant qu'ingénieur, je tire constamment profit des enseignements et des valeurs inculquées par Polytechnique. Je suis fière de faire partie de cette communauté d’ingénieurs et de transmettre l’héritage de qualité et d’excellence dont j’ai hérité en tant que Polytechnicienne.`,
      nom: 'Wiem Mendili',
      poste: 'Ingénieur développement automatisme à Sagemcom',
      photo: 'assets/images/fathi.png'
    },
       {
      texte: `En tant qu'ingénieur développement automatisme aujourd'hui, je suis profondément reconnaissante pour mon parcours à Polytechnique de Sousse. Les années passées dans cette école ont été cruciales dans la construction de ma carrière. Polytechnique m’a offert bien plus que des connaissances théoriques et pratiques, Mais ce qui distingue vraiment ma formation, ce sont les professeurs dévoués et expérimentés. Leur expertise et leur soutien inestimable m’ont encouragée à repousser mes limites et à explorer de nouveaux domaines. Aujourd'hui, en tant qu'ingénieur, je tire constamment profit des enseignements et des valeurs inculquées par Polytechnique. Je suis fière de faire partie de cette communauté d’ingénieurs et de transmettre l’héritage de qualité et d’excellence dont j’ai hérité en tant que Polytechnicienne.`,
      nom: 'Wiem Mendili',
      poste: 'Ingénieur développement automatisme à Sagemcom',
      photo: 'assets/images/maya.png'
    },
       {
      texte: `En tant qu'ingénieur développement automatisme aujourd'hui, je suis profondément reconnaissante pour m`,
      nom: 'Wiem Mendili',
      poste: 'Ingénieur développement automatisme à Sagemcom',
      photo: 'assets/images/soumaya.png'
    },
       {
      texte: `En tant qu'ingénieur développement automatisme aujourd'hui, je suis profondément reconnaissante pour mon parcours à Polytechnique de Sousse. Les années passées dans cette école ont été cruciales dans la construction de ma carrière. Polytechnique m’a offert bien plus que des connaissances théoriques et pratiques, Mais ce qui distingue vraiment ma formation, ce sont les professeurs dévoués et expérimentés. Leur expertise et leur soutien inestimable m’ont encouragée à repousser mes limites et à explorer de nouveaux domaines. Aujourd'hui, en tant qu'ingénieur, je tire constamment profit des enseignements et des valeurs inculquées par Polytechnique. Je suis fière de faire partie de cette communauté d’ingénieurs et de transmettre l’héritage de qualité et d’excellence dont j’ai hérité en tant que Polytechnicienne.`,
      nom: 'Wiem Mendili',
      poste: 'Ingénieur développement automatisme à Sagemcom',
      photo: 'assets/images/wiem.png'
    },
       {
      texte: `En tant qu'ingénieur développement automatisme aujourd'hui, je suis profondément reconnaissante pour mon parcours à Polytechnique de Sousse. Les années passées dans cette école ont été cruciales dans la construction de ma carrière. Polytechnique m’a offert bien plus que des connaissances théoriques et pratiques, Mais ce qui distingue vraiment ma formation, ce sont les professeurs dévoués et expérimentés. Leur expertise et leur soutien inestimable m’ont encouragée à repousser mes limites et à explorer de nouveaux domaines. Aujourd'hui, en tant qu'ingénieur, je tire constamment profit des enseignements et des valeurs inculquées par Polytechnique. Je suis fière de faire partie de cette communauté d’ingénieurs et de transmettre l’héritage de qualité et d’excellence dont j’ai hérité en tant que Polytechnicienne.`,
      nom: 'Wiem Mendili',
      poste: 'Ingénieur développement automatisme à Sagemcom',
      photo: 'assets/images/halim.png'
    },
       {
      texte: `En tant qu'ingénieur développement automatisme aujourd'hui, je suis profondément reconnaissante pour mon parcours à Polytechnique de Sousse. Les années passées dans cette école ont été cruciales dans la construction de ma carrière. Polytechnique m’a offert bien plus que des connaissances théoriques et pratiques, Mais ce qui distingue vraiment ma formation, ce sont les professeurs dévoués et expérimentés. Leur expertise et leur soutien inestimable m’ont encouragée à repousser mes limites et à explorer de nouveaux domaines. Aujourd'hui, en tant qu'ingénieur, je tire constamment profit des enseignements et des valeurs inculquées par Polytechnique. Je suis fière de faire partie de cette communauté d’ingénieurs et de transmettre l’héritage de qualité et d’excellence dont j’ai hérité en tant que Polytechnicienne.`,
      nom: 'Wiem Mendili',
      poste: 'Ingénieur développement automatisme à Sagemcom',
      photo: 'assets/images/fathi.png'
    },
    // Ajoute d'autres témoignages ici...
  ];

  currentIndex: number = 0;
  currentTemoignageIndex: number = 0;

  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousTemoignage(): void {
    this.currentTemoignageIndex = (this.currentTemoignageIndex - 1 + this.temoignages.length) % this.temoignages.length;
  }

  nextTemoignage(): void {
    this.currentTemoignageIndex = (this.currentTemoignageIndex + 1) % this.temoignages.length;
  }

  goToTemoignage(index: number): void {
    this.currentTemoignageIndex = index;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.shouldAnimate = true;
    }, 500);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.shouldAnimate = true;
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.statsSection.nativeElement);
  }
}
