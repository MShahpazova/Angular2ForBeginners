import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component'
@Component({
    selector: 'my-app',
    template: `
      <ul>
        <li> *ngFor="#course of courses"></li>
      </ul>
     `
})
export class AppComponent {
  courses = ['Course 1', 'Course 2', 'Course 3']
}