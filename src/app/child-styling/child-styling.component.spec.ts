import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStylingComponent } from './child-styling.component';

describe('ChildStylingComponent', () => {
  let component: ChildStylingComponent;
  let fixture: ComponentFixture<ChildStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
