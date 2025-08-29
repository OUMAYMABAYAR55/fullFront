import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquerComponent } from './marquer.component';

describe('MarquerComponent', () => {
  let component: MarquerComponent;
  let fixture: ComponentFixture<MarquerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarquerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
