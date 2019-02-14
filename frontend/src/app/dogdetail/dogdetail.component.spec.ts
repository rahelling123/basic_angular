import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogdetailComponent } from './dogdetail.component';

describe('DogdetailComponent', () => {
  let component: DogdetailComponent;
  let fixture: ComponentFixture<DogdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
