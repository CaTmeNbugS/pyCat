import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrusPageComponent } from './estrus-page.component';

describe('EstrusPageComponent', () => {
  let component: EstrusPageComponent;
  let fixture: ComponentFixture<EstrusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
