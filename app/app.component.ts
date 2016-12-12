import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component'
@Component({
    selector: 'my-app',
    template: `
      <ul>
      <!--Leading aserisk tells angular to treat an element as a template-->
        <li> *ngFor="#course of courses, #i = index">
          {{i + 1}} -- {{course}}
        </li>
      </ul>
     `
})
export class AppComponent {
  courses = ['Course 1', 'Course 2', 'Course 3']
} 