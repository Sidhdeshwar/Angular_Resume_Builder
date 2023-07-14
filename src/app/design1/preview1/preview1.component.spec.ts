import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preview1Component } from './preview1.component';

describe('Preview1Component', () => {
  let component: Preview1Component;
  let fixture: ComponentFixture<Preview1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Preview1Component]
    });
    fixture = TestBed.createComponent(Preview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
