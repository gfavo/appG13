import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinsPage } from './checkins.page';

describe('CheckinsPage', () => {
  let component: CheckinsPage;
  let fixture: ComponentFixture<CheckinsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
