import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwFirstComponent } from './tw-first.component';

describe('TwFirstComponent', () => {
  let component: TwFirstComponent;
  let fixture: ComponentFixture<TwFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
