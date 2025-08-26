import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Age710Component } from './age710.component';

describe('Age710Component', () => {
  let component: Age710Component;
  let fixture: ComponentFixture<Age710Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Age710Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Age710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
