import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratorPage } from './accelerator.page';

describe('AcceleratorPage', () => {
  let component: AcceleratorPage;
  let fixture: ComponentFixture<AcceleratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceleratorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceleratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
