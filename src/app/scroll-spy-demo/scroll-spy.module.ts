import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyElementDirective } from './scroll-spy-element.directive';
import { ScrollSpyService } from './scroll-spy.service';

@NgModule({
  declarations: [
    ScrollSpyElementDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ScrollSpyElementDirective,
  ],
  providers: [
    ScrollSpyService,
  ],
})
export class ScrollSpyModule {}
