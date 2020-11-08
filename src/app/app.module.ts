import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewOneComponent } from './new-one/new-one.component';
import { FormsModule } from '@angular/forms';
import { HeroNgComponent } from './hero-ng/hero-ng.component';

@NgModule({
  declarations: [
    AppComponent,
    NewOneComponent,
    HeroNgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
