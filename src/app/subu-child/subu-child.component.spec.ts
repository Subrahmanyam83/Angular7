import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubuChildComponent } from './subu-child.component';

describe('SubuChildComponent', () => {
  let component: SubuChildComponent;
  let fixture: ComponentFixture<SubuChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubuChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubuChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
