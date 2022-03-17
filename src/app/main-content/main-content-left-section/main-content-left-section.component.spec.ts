import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentLeftSectionComponent } from './main-content-left-section.component';

describe('MainContentLeftSectionComponent', () => {
  let component: MainContentLeftSectionComponent;
  let fixture: ComponentFixture<MainContentLeftSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentLeftSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentLeftSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
