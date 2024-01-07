import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentComponent } from './2.component';

describe('2Component', () => {
  let component: SecondComponentComponent;
  let fixture: ComponentFixture<SecondComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondComponentComponent]
    });
    fixture = TestBed.createComponent(SecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
