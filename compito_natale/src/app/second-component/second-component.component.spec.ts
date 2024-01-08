import { ComponentFixture, TestBed } from '@angular/core/testing';

import { second-component import { second-component } from './second-component';
 } from './second-component';

describe('SecondoComponent', () => {
  let component: second-component;
  let fixture: ComponentFixture<SecondoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondoComponent]
    });
    fixture = TestBed.createComponent(SecondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});