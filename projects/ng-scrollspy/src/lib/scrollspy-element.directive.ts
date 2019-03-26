import { Directive, OnDestroy, Input, ElementRef, OnInit } from '@angular/core';
import { ScrollSpyService } from './scrollspy.service';

@Directive({
  selector: '[scrollSpyElement]',
})
export class ScrollSpyElementDirective implements OnInit, OnDestroy {
  @Input()
  private scrollSpyId: string;

  constructor(
    private elementRef: ElementRef,
    private scrollSpy: ScrollSpyService,
  ) {}

  public ngOnInit(): void {
    this.scrollSpy.addElement(this.elementRef.nativeElement, this.scrollSpyId);
  }

  public ngOnDestroy(): void {
    this.scrollSpy.removeElement(this.elementRef.nativeElement, this.scrollSpyId);
  }
}
