import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableScopeComponent } from './variable-scope.component';

describe('VariableScopeComponent', () => {
  let component: VariableScopeComponent;
  let fixture: ComponentFixture<VariableScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableScopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
