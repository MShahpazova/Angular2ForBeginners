import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component'
import {ControlGroup, FormBuilder} from 'angular2/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
@Component({
    selector: 'my-app',
    template: `
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
    // Get a reference to the “search” control and subscribe to its valueChanges property
    var search = this.form.find('search');
    search.valueChanges.debounceTime(400)
          .map(str => (<string>str).replace(' ', '-'))
          .subscribe(x => console.log(x));
  }
} 