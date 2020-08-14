import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFocusComponent } from './brand-focus.component';

describe('BrandFocusComponent', () => {
  let component: BrandFocusComponent;
  let fixture: ComponentFixture<BrandFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
