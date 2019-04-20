import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoPage } from './metodo.page';

describe('MetodoPage', () => {
  let component: MetodoPage;
  let fixture: ComponentFixture<MetodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
