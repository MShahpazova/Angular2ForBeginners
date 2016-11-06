import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {SummaryPipe} from './summary.pipe'
@Component({
    selector: 'my-app',
    template: `
        <like [totalLikes]="tweet.totalLikes" 
         [iLike]="tweet.iLike" (change)="onLikeChange($event)"> </like>
        <br>
        <span> {{totalLikes}}</span>
        {{tweet.content}}
        <li>Author is: {{tweet.author?.name}}</li>
     `,
     pipes: [SummaryPipe],
    directives: [FavoriteComponent, LikeComponent]
})
export class AppComponent {
    tweet = {
         author: null,
         iLike: false,
         totalLikes: 5,
         content: `
         MAria
         Maria Maria Maria Maria Maria Maria
         Maria Maria Maria Maria Maria Maria
         Maria Maria Maria Maria Maria Maria
         Maria Maria Maria Maria Maria Maria
         `
    }

       onLikeChange($event){
           
           console.log($event)
 } 
}