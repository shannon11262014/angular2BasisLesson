/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lesson4Component } from './lesson4.component';

describe('Lesson4Component', () => {
  let component: Lesson4Component;
  let fixture: ComponentFixture<Lesson4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
