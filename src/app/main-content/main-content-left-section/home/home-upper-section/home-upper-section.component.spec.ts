import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpperSectionComponent } from './home-upper-section.component';

describe('HomeUpperSectionComponent', () => {
  let component: HomeUpperSectionComponent;
  let fixture: ComponentFixture<HomeUpperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUpperSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
