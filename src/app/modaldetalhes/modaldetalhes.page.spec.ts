import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldetalhesPage } from './modaldetalhes.page';

describe('ModaldetalhesPage', () => {
  let component: ModaldetalhesPage;
  let fixture: ComponentFixture<ModaldetalhesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldetalhesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
