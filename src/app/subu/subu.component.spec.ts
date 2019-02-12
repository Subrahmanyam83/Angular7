import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubuComponent } from './subu.component';

describe('SubuComponent', () => {
  let component: SubuComponent;
  let fixture: ComponentFixture<SubuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
