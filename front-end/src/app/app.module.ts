import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppInitializationModule } from './app-initialization.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout';
import { ViewsModule } from './views';
import { FeautreModule } from './features';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitializationModule,
    LayoutModule,
    ViewsModule,
    FeautreModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
