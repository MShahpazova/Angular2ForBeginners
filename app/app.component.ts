import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';

@Component({
    selector: 'my-app',
    directives: [BootStrapPanel],
    template: `
     <bs-panel>
        <div class="heading">This is the heading</div>
        <div class="body">This is the body</div>
      </bs-panel>
     `
})
export class AppComponent {
}