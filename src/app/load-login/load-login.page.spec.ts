import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadLoginPage } from './load-login.page';

describe('LoadLoginPage', () => {
  let component: LoadLoginPage;
  let fixture: ComponentFixture<LoadLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
