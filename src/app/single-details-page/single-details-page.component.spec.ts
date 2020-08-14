import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDetailsPageComponent } from './single-details-page.component';

describe('SingleDetailsPageComponent', () => {
  let component: SingleDetailsPageComponent;
  let fixture: ComponentFixture<SingleDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
