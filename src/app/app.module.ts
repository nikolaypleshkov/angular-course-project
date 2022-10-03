import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppInitializationModule } from './app-initialization.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout';
import { ViewsModule } from './views';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitializationModule,
    LayoutModule,
    ViewsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
