import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Age1315Component } from './age1315.component';

describe('Age1315Component', () => {
  let component: Age1315Component;
  let fixture: ComponentFixture<Age1315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Age1315Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Age1315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
