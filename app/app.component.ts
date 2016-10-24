import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
@Component({
    selector: 'my-app',
    template: `
        <i class="glyphicon glyphicon-star"></i>
        <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"> </favorite>
     `,
    directives: [FavoriteComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }
    onFavoriteChange($event){
        console.log($event);
    }

 } 