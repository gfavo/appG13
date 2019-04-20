import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoAulaPage } from './manutencao-aula.page';

describe('ManutencaoAulaPage', () => {
  let component: ManutencaoAulaPage;
  let fixture: ComponentFixture<ManutencaoAulaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoAulaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoAulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
