
# Thus far!!
# Lifecycle Hooks and Component communication
Presently exercising change detection in lifecycle hooks and also component communication, especially the concepts of dumb and smart components, child and parents component and how to establish cross communication between these components using `ngOnInit`. In this case =, i have two components, room and roomlist, in which room is the parent and smart component and roomlist is a dumb and child component. what i have been able to achieve is to establish communication between these components in which child component passes the data to the parent componet. Meanwhile, i have also used ngOnchanges. 
`ngOnChanges`
`ngOnInit`
`ngDoCheck`
`ngAfterContentinit`
`ngAfterConntentChecked`
`ngAfterViewInit`
`ngOnDestroy`

Content Projection and Hook Lifecycle:
Content projection is a powerful feature in Angular that allows you to insert, or project, content from a parent component into a child component. This enables the creation of reusable components that can accept dynamic content.

What is Content Projection?
Content projection is done using the <ng-content> tag. When Angular sees <ng-content>, it knows to insert content from the parent component's template into the child component's template at the location of <ng-content>.

`ngAfterContentInit` and `ngAfterContentChecked`
These lifecycle hooks are used in conjunction with content projection to manage and interact with projected content.

`ngAfterContentInit`
`ngAfterContentInit` is a lifecycle hook called after Angular has fully initialized all of the content projected into the component.
This hook is called once after the first `ngDoCheck`.


Content projection is a powerful feature in Angular that allows you to insert, or project, content from a parent component into a child component. This enables the creation of reusable components that can accept dynamic content.

What is Content Projection?
Content projection is done using the <ng-content> tag. When Angular sees <ng-content>, it knows to insert content from the parent component's template into the child component's template at the location of <ng-content>.

Example of Content Projection
Parent Component Template:

html
Copy code
<app-child>
  <p>Projected content from the parent!</p>
</app-child>
Child Component Template:

html
Copy code
<div>
  <h2>Child Component</h2>
  <ng-content></ng-content>
</div>
In this example, the <p> tag from the parent component is projected into the <ng-content> tag in the child component, resulting in the following rendered output:

html
Copy code
<div>
  <h2>Child Component</h2>
  <p>Projected content from the parent!</p>
</div>
ngAfterContentInit and ngAfterContentChecked
These lifecycle hooks are used in conjunction with content projection to manage and interact with projected content.

ngAfterContentInit
ngAfterContentInit is a lifecycle hook called after Angular has fully initialized all of the content projected into the component.
This hook is called once after the first ngDoCheck.
Usage Example:

typescript
Copy code
import { Component, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<ng-content></ng-content>`
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') projectedContent!: ElementRef;

  ngAfterContentInit() {
    console.log('Content initialized:', this.projectedContent.nativeElement);
  }
}
Parent Component Template:

html
Copy code
<app-child>
  <p #projectedContent>Content to be projected</p>
</app-child>
In this example, ngAfterContentInit is used to interact with the projected content after it has been initialized.

ngAfterContentChecked
ngAfterContentChecked is a lifecycle hook called after every check of the content projected into the component.
This hook is called after ngAfterContentInit and every subsequent ngDoCheck.
Usage Example:

**Differences from `ngOnInit` and `ngOnChanges`**

**`ngOnInit`:**

Called once after the component is initialized.
Suitable for initialization logic that does not depend on content projection.
**`ngOnChanges`:**

Called whenever an input property changes.
Suitable for responding to changes in data-bound input properties.
**`ngAfterContentInit`:**

Called once after content projection is initialized.
Suitable for operations that depend on the content being projected into the component.
**`ngAfterContentChecked`:**

Called after every change detection cycle for the projected content.
Suitable for operations that need to check or respond to changes in the projected content.
**When to Use These Hooks**
ngAfterContentInit: Use this when you need to perform actions after the projected content is initialized, such as setting up references or initializing third-party libraries that depend on the content.
ngAfterContentChecked: Use this for operations that need to run after each change detection cycle involving the projected content, such as updating UI elements or performing checks on the content.
By using these hooks appropriately, you can create components that are more flexible and capable of handling dynamic content effectively, enhancing the modularity and reusability of your Angular applications.






# **Dependency Injection **
Dependency Injection (DI) in Angular is a design pattern that is used to implement Inversion of Control (IoC) for resolving dependencies. It allows the framework to provide instances of classes or values when they are required by other components or services. This promotes the development of loosely coupled, modular, and testable code.

Key Concepts of Dependency Injection in Angular
Provider: A provider is an object that tells the injector how to obtain or create a dependency. There are different types of providers:

Class Provider: The most common type. Uses a class to define how to create an instance of the dependency.
Value Provider: Uses a static value to provide the dependency.
Factory Provider: Uses a factory function to provide the dependency.
Alias Provider: Uses an alias to refer to another provider.
Injector: The injector is responsible for creating instances of the dependencies and injecting them where needed. Angular has a hierarchical dependency injection system which means there is a tree of injectors that can provide different scopes of dependency instances.

Token: A token is an identifier used by the injector to locate a provider. This can be a class, a string, or an InjectionToken.

Decorator: Decorators like @Injectable(), @Inject(), @Optional(), and @Self() are used to define and control how dependencies are provided and injected.

 # **Setting Up HttpClientModule: Angular HTTP and Observables**
 HttpService , RxJs observables and http get
RxJs Observable and Observer
 Http Put and Delete
 Http Request
 ShareReplay RxJs Operators
 Async Pipe
catchError operator
 map operator
 Http Interceptor 
 APP_INITIALIZER