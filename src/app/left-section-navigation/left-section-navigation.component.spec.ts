import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSectionNavigationComponent } from './left-section-navigation.component';

describe('LeftSectionNavigationComponent', () => {
  let component: LeftSectionNavigationComponent;
  let fixture: ComponentFixture<LeftSectionNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSectionNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSectionNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
