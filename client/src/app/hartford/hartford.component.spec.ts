import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HartfordComponent } from './hartford.component';

describe('HartfordComponent', () => {
  let component: HartfordComponent;
  let fixture: ComponentFixture<HartfordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HartfordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HartfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
