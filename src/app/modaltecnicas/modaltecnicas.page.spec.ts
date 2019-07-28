import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltecnicasPage } from './modaltecnicas.page';

describe('ModaltecnicasPage', () => {
  let component: ModaltecnicasPage;
  let fixture: ComponentFixture<ModaltecnicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltecnicasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltecnicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
