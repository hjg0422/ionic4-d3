import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DThreeTwPage } from './d-three-tw.page';

describe('DThreeTwPage', () => {
  let component: DThreeTwPage;
  let fixture: ComponentFixture<DThreeTwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DThreeTwPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DThreeTwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
