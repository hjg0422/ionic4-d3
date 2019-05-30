import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DThreeOnePage } from './d-three-one.page';

describe('DThreeOnePage', () => {
  let component: DThreeOnePage;
  let fixture: ComponentFixture<DThreeOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DThreeOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DThreeOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
