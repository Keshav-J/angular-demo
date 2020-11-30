import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlMatcherChildComponent } from './url-matcher-child.component';

describe('UrlMatcherChildComponent', () => {
  let component: UrlMatcherChildComponent;
  let fixture: ComponentFixture<UrlMatcherChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlMatcherChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlMatcherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
