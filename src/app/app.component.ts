import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ScrollSpyService } from 'ng-scrollspy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  public subSections: number[] = [ 1, 2, 3, 4 ];
  private currentSection: string = 'home';
  private currentSubSection: string = 'pricing-section-1';

  constructor(
    private changeDetector: ChangeDetectorRef,
    private scrollSpy: ScrollSpyService,
  ) {}

  public ngAfterViewInit(): void {
    this.subsribeScrollSpy();
  }

  public isActive(section: string): boolean {
    return this.currentSection === section;
  }

  public isPricingActive(section: string): boolean {
    return this.isActive('pricing') && (this.currentSubSection === `pricing-section-${section}`);
  }

  private subsribeScrollSpy(): void {
    this.scrollSpy.getCurrentSection$()
      .subscribe((currentSection: string): void => {
        this.currentSection = currentSection;
        this.changeDetector.markForCheck();
      });

    this.scrollSpy.getCurrentSection$('sidenav-spy')
      .subscribe((currentSubSection: string): void => {
        this.currentSubSection = currentSubSection;
        this.changeDetector.markForCheck();
      });
  }
}
