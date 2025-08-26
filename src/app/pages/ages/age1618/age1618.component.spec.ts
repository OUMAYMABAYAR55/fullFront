import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Age1618Component } from './age1618.component';

describe('Age1618Component', () => {
  let component: Age1618Component;
  let fixture: ComponentFixture<Age1618Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Age1618Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Age1618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
