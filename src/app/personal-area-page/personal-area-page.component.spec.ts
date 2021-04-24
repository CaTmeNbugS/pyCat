import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaPageComponent } from './personal-area-page.component';

describe('PersonalAreaPageComponent', () => {
  let component: PersonalAreaPageComponent;
  let fixture: ComponentFixture<PersonalAreaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAreaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
