import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DThreePage } from './d-three.page';

describe('DThreePage', () => {
  let component: DThreePage;
  let fixture: ComponentFixture<DThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
