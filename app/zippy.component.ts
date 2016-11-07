import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';

@Component({
    selector: 'zippy',
    directives: [BootStrapPanel],   
    template: `
    <bs-panel>
     <i class="glyphicon"
     [ngClass]="{
    'glyphicon-chevron-down': !XisOpen
     }">
     </i>
    </bs-panel>
    `
})



export class ZippyComponent{
isOpen = false;
}