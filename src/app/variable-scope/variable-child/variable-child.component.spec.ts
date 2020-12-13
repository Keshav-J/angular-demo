import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableChildComponent } from './variable-child.component';

describe('VariableChildComponent', () => {
  let component: VariableChildComponent;
  let fixture: ComponentFixture<VariableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
