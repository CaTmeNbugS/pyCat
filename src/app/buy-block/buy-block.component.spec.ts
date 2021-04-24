import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBlockComponent } from './buy-block.component';

describe('BuyBlockComponent', () => {
  let component: BuyBlockComponent;
  let fixture: ComponentFixture<BuyBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
