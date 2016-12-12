import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component'
@Component({
    selector: 'my-app',
    directives: [BootStrapPanel, ZippyComponent],
    template: `
     <bs-panel>
        <div class="heading">This is the heading</div>
        
        <div class="body">This is the body</div>
      </bs-panel>
      <zippy>Maria</zippy>
     `
})
export class AppComponent {
}