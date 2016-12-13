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
//  We can use the static Observable.of() method to create an observable from a list of
// arguments:
  constructor() {
    //method is used for running an async operation at specified intervals
    var userStream = Observable.of({
      userId: 1, username: 'mosh'
    }).delay(2000)
    var tweetStream = Observable.fromArray([1, 2, 3 ]).delay(1500)
    Observable.forkJoin(userStream, tweetStream)
    .map(joined => new Object({user: joined[0], tweets: joined[1]}))
    .subscribe(result => console.log(result))
  }
}