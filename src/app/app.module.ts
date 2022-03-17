import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSectionNavigationComponent } from './left-section-navigation/left-section-navigation.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainContentLeftSectionComponent } from './main-content/main-content-left-section/main-content-left-section.component';
import { MainContentRightSectionComponent } from './main-content/main-content-right-section/main-content-right-section.component';
import { NavigationComponent } from './left-section-navigation/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSectionNavigationComponent,
    MainContentComponent,
    MainContentLeftSectionComponent,
    MainContentRightSectionComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
