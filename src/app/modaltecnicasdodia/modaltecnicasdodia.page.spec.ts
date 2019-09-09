import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltecnicasdodiaPage } from './modaltecnicasdodia.page';

describe('ModaltecnicasdodiaPage', () => {
  let component: ModaltecnicasdodiaPage;
  let fixture: ComponentFixture<ModaltecnicasdodiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltecnicasdodiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltecnicasdodiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
