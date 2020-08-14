import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBrandComponent } from './trending-brand.component';

describe('TrendingBrandComponent', () => {
  let component: TrendingBrandComponent;
  let fixture: ComponentFixture<TrendingBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
