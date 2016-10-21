import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
@Component({
    selector: 'my-app',
    template: `
        <input type="text" [value]="title" (input)="title = $event.target.value"/>
        
        Preview: {{title}}
     `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    title = "Angular App";
 } 