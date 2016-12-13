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
    Observable.of(1);
    Observable.of([1, 2, 3]);
  }
}