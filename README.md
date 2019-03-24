# :shipit: Angular Scroll Spy :shipit:
A lightweight Angular library to get the active section.

[See the demo here](https://aleesaan.github.io/ng-scrollspy/).

### Features:
* Super smooth!
* Works for nested and dynamically generated elements
* Supports multiple spies
* No other dependencies

### Installation
First install the library.

```
npm install ng-scrollspy
```

Now import the **NgScrollSpyModule** in your module.

```ts
import { NgScrollSpyModule } from 'ng-scrollspy';

@NgModule({
  ...
  imports: [
    NgScrollSpyModule,
  ],
  ...
})
export class AppModule {}
```

### Usage:
The **NgScrollSpyModule** comes with a directive and a service.  
The `scrollSpyElement` directive has to be applied on the elements to be spied, together with a unique `id`:

```html
<h2 scrollSpyElement id="firstSpiedElement">
  I am the first being spied!
</h2>
```

In your component, on `AfterViewInit`, you can subscribe to the `ScrollSpyService` for updates on the currently active section:

```ts
import { ScrollSpyService } from 'ng-scrollspy';

@Component()
export class AppComponent implements AfterViewInit {
  constructor(private scrollSpy: ScrollSpyService) {}

  public ngAfterViewInit(): void {
    this.subsribeScrollSpy();
  }

  private subsribeScrollSpy(): void {
    this.scrollSpy.getCurrentSection$()
      .subscribe((section: string): void => {
        console.log(`${section} is active!`);
      });
  }
}
```

#### Multiple spies:
You might need to have different spies at the same time, like in a page with multiple menus.  
You can specify this as an input to the directive:

```html
<h2 scrollSpyElement scrollSpyId="sub-menu" id="subMenuElement1">
  I am the first spied element of a sub menu!
</h2>
```

In the service, you can then subscribe to the spy you specified:
```ts
this.scrollSpy.getCurrentSection$('sub-menu')
  .subscribe((subSection: string): void => {
    console.log(`${subSection} is active!`);
  });
```
