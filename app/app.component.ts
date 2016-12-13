import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component'
import {ControlGroup, FormBuilder} from 'angular2/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'my-app',
    template: `
     `
})
export class AppComponent {
  constructor() {
    // Simulate a failed AJAX call, by creating an observable using the static Observable.throw() method.
    // This methid returns an observable that terminates with an exception
    var observable = Observable.throw(new Error("Something failed"));
    //Subscribe to this observable and provide an error handler
    observable.subscribe(x => console.log(x),
    error => console.error(error))
  }
}