import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
@Component({
    selector: 'my-app',
    template: `
        <like (change)="onLikeChange($event)"></like>
        {{post.numberofLikes}}
     `,
    directives: [FavoriteComponent, LikeComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true,
         isLiked: false,
         numberofLikes: 5
    }
    onFavoriteChange($event){
        console.log($event);
    }
       onLikeChange($event){
           this.post.numberofLikes += $event.newValue === true ? 1 : -1;
 } 

        //  <i class="glyphicon glyphicon-star"></i>
        // <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"> </favorite>