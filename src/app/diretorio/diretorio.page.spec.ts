import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorioPage } from './diretorio.page';

describe('DiretorioPage', () => {
  let component: DiretorioPage;
  let fixture: ComponentFixture<DiretorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretorioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
