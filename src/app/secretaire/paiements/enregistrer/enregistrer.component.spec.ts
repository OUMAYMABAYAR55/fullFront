import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CardModule, GridModule, ButtonModule, FormModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { EnregistrerComponent } from './enregistrer.component';

describe('EnregistrerComponent', () => {
  let component: EnregistrerComponent;
  let fixture: ComponentFixture<EnregistrerComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardModule,
        GridModule,
        ButtonModule,
        FormModule,
        EnregistrerComponent
      ],
      providers: [
        IconSetService,
        provideRouter([])
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(EnregistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default paiement.date set to today', () => {
    const today = new Date().toISOString().split('T')[0];
    expect(component.paiement.date).toBe(today);
  });

  it('should update paiement.nom when form changes', () => {
    component.paiement.nom = 'Test Client';
    expect(component.paiement.nom).toBe('Test Client');
  });
});
