import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfficherComponent } from './afficher.component';
import { provideRouter } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';

describe('AfficherComponent', () => {
  let component: AfficherComponent;
  let fixture: ComponentFixture<AfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherComponent],
      providers: [
        IconSetService,
        provideRouter([])
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter paiements by name', () => {
    component.filtre = 'Jean';
    expect(component.paiementsFiltres.length).toBe(1);
    expect(component.paiementsFiltres[0].nom).toBe('Jean Dupont');
  });

  it('should return all paiements when filter is empty', () => {
    component.filtre = '';
    expect(component.paiementsFiltres.length).toBe(3);
  });
});
