import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Age1113Component } from './age1113.component';

describe('Age1113Component', () => {
  let component: Age1113Component;
  let fixture: ComponentFixture<Age1113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Age1113Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Age1113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
