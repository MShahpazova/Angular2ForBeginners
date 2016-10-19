import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    img [src]="imageUrl"/>
    img bind-src="imageUrl"/>
    <course></course>
    <author></author>`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200/"
 } 