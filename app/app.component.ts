import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component'
import {ControlGroup, FormBuilder} from 'angular2/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromArray';

@Component({
    selector: 'my-app',
    template: `
     `
})
export class AppComponent {
//  We can use the static Observable.of() method to create an observable from a list of
// arguments:
  constructor() {
    //method is used for running an async operation at specified intervals
    var observable = Observable.interval(1000);
    observable.subscribe(x => console.log(x));
  }
}