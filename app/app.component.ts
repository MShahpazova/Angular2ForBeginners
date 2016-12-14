import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {PostService} from './post.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {OnInit} from 'angular2/core'
@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="isLoading"><i class="fa fa-spinner fa-spin"></i></div>
     `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    isLoading = true;
    constructor(private _postService: PostService) {
        this._postService.createPost({ userId: 1, title: "a", body: "b" })
    }

    ngOnInit() {
        //if we want to call a server we do it here
        this._postService.getPosts()
            .subscribe(posts => {
                debugger
                this.isLoading = false;
                console.log(posts[0].id)
            })
    }
}