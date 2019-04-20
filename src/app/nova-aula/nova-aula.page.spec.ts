import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAulaPage } from './nova-aula.page';

describe('NovaAulaPage', () => {
  let component: NovaAulaPage;
  let fixture: ComponentFixture<NovaAulaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaAulaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
