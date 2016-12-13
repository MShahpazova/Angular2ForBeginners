import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component'
import {ControlGroup, FormBuilder} from 'angular2/common';
@Component({
    selector: 'my-app',
    template: `

      <ul>
       <li *ngFor="#course of courses, #i = index">
          {{i + 1}} -- {{course}}
        </li>
      </ul>
     
     <form [ngFormModel]="form">
    <input type="text" ngControl="search">
    </form>
       

     `
})
export class AppComponent {
  form: ControlGroup;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      search: []
    })
  }
  courses = ['Course 1', 'Course 2', 'Course 3']
} 