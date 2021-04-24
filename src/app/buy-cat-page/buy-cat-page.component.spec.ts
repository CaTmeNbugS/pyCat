import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCatPageComponent } from './buy-cat-page.component';

describe('BuyCatPageComponent', () => {
  let component: BuyCatPageComponent;
  let fixture: ComponentFixture<BuyCatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
