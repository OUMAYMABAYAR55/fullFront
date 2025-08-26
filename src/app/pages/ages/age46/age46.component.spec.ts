import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Age46Component } from './age46.component';

describe('Age46Component', () => {
  let component: Age46Component;
  let fixture: ComponentFixture<Age46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Age46Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Age46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
