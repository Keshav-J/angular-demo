import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwSecondComponent } from './tw-second.component';

describe('TwSecondComponent', () => {
  let component: TwSecondComponent;
  let fixture: ComponentFixture<TwSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
