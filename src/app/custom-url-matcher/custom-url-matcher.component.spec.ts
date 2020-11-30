import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUrlMatcherComponent } from './custom-url-matcher.component';

describe('CustomUrlMatcherComponent', () => {
  let component: CustomUrlMatcherComponent;
  let fixture: ComponentFixture<CustomUrlMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomUrlMatcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUrlMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
