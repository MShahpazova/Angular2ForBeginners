import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
@Component({
    selector: 'my-app',
    template: `
        <course></course>
        <author></author>
        <input type="text" [value]="title" (input)="title = $event.target.value"/>
        <input type="button" (click)= "title = ''" value="Clear"/>
        <input type="text" [(ngModel)]="title"/>
        <input type="text" bindon-ngModel="title"/>
        <favorite> </favorite>
        Preview: {{title}}
     `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent {
    title = "Angular App";

 } 