import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <course></course>
    <author></author>
    <button (click)="onClick($event)">Submit</button>
     `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200/"
    isActive = false;

    onClick($event){
        console.log("Clicked");
    }
 } 