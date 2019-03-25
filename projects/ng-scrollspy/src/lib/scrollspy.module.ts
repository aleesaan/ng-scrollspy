import { NgModule } from '@angular/core';
import { ScrollSpyElementDirective } from './scrollspy-element.directive';

@NgModule({
  declarations: [
    ScrollSpyElementDirective,
  ],
  exports: [
    ScrollSpyElementDirective,
  ],
})
export class NgScrollSpyModule {}
