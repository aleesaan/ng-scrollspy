import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoremIpsumComponent } from './lorem-ipsum.component';
import { NgScrollSpyModule } from 'ng-scrollspy';

@NgModule({
  declarations: [
    AppComponent,
    LoremIpsumComponent,
  ],
  imports: [
    BrowserModule,
    NgScrollSpyModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
