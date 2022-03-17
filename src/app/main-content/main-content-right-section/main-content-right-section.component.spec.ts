import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentRightSectionComponent } from './main-content-right-section.component';

describe('MainContentRightSectionComponent', () => {
  let component: MainContentRightSectionComponent;
  let fixture: ComponentFixture<MainContentRightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentRightSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentRightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
