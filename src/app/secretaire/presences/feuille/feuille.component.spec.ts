import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleComponent } from './feuille.component';

describe('FeuilleComponent', () => {
  let component: FeuilleComponent;
  let fixture: ComponentFixture<FeuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeuilleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
