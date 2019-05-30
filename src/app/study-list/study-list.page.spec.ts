import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyListPage } from './study-list.page';

describe('StudyListPage', () => {
  let component: StudyListPage;
  let fixture: ComponentFixture<StudyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
