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
      var observable = Observable.fromArray([1,2,3]);
      observable.subscribe(x=> console.log(x),
      error => console.error(error));
  }
}