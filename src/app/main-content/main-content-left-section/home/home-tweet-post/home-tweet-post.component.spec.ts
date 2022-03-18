import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTweetPostComponent } from './home-tweet-post.component';

describe('HomeTweetPostComponent', () => {
  let component: HomeTweetPostComponent;
  let fixture: ComponentFixture<HomeTweetPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTweetPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTweetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
