import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSectionNavigationComponent } from './left-section-navigation/left-section-navigation.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainContentLeftSectionComponent } from './main-content/main-content-left-section/main-content-left-section.component';
import { MainContentRightSectionComponent } from './main-content/main-content-right-section/main-content-right-section.component';
import { NavigationComponent } from './left-section-navigation/navigation/navigation.component';
import { SearchTwitterComponent } from './shared/search-twitter/search-twitter.component';
import { WhoToFollowComponent } from './shared/who-to-follow/who-to-follow.component';
import { TrendsForYouComponent } from './shared/trends-for-you/trends-for-you.component';
import { HomeComponent } from './main-content/main-content-left-section/home/home.component';
import { HomeUpperSectionComponent } from './main-content/main-content-left-section/home/home-upper-section/home-upper-section.component';
import { HomeTweetPostComponent } from './main-content/main-content-left-section/home/home-tweet-post/home-tweet-post.component';
import { TweetDetailsComponent } from './main-content/main-content-left-section/home/home-tweet-post/tweet-details/tweet-details.component';
import { HomeContentComponent } from './main-content/main-content-left-section/home/home-content/home-content.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftSectionNavigationComponent,
    MainContentComponent,
    MainContentLeftSectionComponent,
    MainContentRightSectionComponent,
    NavigationComponent,
    SearchTwitterComponent,
    WhoToFollowComponent,
    TrendsForYouComponent,
    HomeComponent,
    HomeUpperSectionComponent,
    HomeTweetPostComponent,
    TweetDetailsComponent,
    HomeContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
