import {Component} from 'angular2/core';
import {BootStrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component'
@Component({
    selector: 'my-app',
    template: `
     <ul class="nav nav-pills">
     <!--bootstrap requires the li that represents the current tab to hve the class active-->
       <li [class.active]="viewMode == 'map'"><a (click)="viewMode ='map'">Map view</a>
       <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List view</a></li>
     </ul>
     <div [ngSwitch]="viewMode">
       <template [ngSwitchWhen]="'map'" ngSwitchDefault> Map View Content<template>
       <template [ngSwitchWhen]="'list'">List View Content</template>
     </div>
     `
})
export class AppComponent {
  viewMode = 'map';
}