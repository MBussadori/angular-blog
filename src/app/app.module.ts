import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerTopComponent } from './components/container-top/container-top.component';
import { ContainerBottomComponent } from './components/container-bottom/container-bottom.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerTopComponent,
    ContainerBottomComponent,
    BigCardComponent,
    SimpleCardComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
