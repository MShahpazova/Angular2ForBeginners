import {Component, EventEmitter, Output, NgZone } from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {UsersService} from './users.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {OnInit} from 'angular2/core'
import { Subject } from 'rxjs/Subject'
import {ContactFormComponent} from './contact-form.component'
@Component({
    selector: 'my-app',
    template: `
   
       <div *ngIf="false"><i class="fa fa-spinner fa-spin"></i></div>
        <form (keydown)="keyDownFunction($event)">
          <label for="user-name">Search for user</label>
          <input #user type="text" id="user-name" value="">
        </form>
       <div *ngIf="!isLoading"><img src={{profile_url}} alt="Smiley face" height="42" width="42"/> </div>
        <ul>
          <li *ngFor="#follower of followers">
            <img src = {{follower.avatar_url}} alt="Smiley face" height="42" width="42"/>
          </li>            
        </ul>
        <contact-form></contact-form>
     `,
    directives: [ContactFormComponent],
    providers: [UsersService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    isLoading = true;
    private userData = new Subject();
    public userData$ = this.userData.asObservable();
    private user_avatar_url: String;
    private followers = [];
    private _urlFollowers: String;
    private userName: string;
    private data: Observable<any>;
    myevent = new EventEmitter();

    constructor(private ngZone: NgZone, private _usersService: UsersService) {
        // this._usersService.getProfile().subscribe(profile => {
        //     this.profile_url = profile.avatar_url;
        //     this.isLoading = false})
        //     this._usersService.getFollowers().subscribe(followers => {
        //          this.followers = followers;
        //         console.log(followers);
        // })
    }

    keyDownFunction(event?) {
        if (event.keyCode == 13) {
            var value = (<HTMLInputElement>document.getElementById('user-name')).value;
            console.log((<HTMLInputElement>document.getElementById('user-name')).value);
            this.userName = (<HTMLInputElement>document.getElementById('user-name')).value;
            this.profile_url = "https://api.github.com/users/" + this.userName;
            this._urlFollowers = "https://api.github.com/users/" + this.userName + "/followers";
            this.userData.next({
                userUrl: this.profile_url,
                followersUrl: this._urlFollowers
            })

        }
    }

    ngOnInit() {
        this.userData$.subscribe(data => {
            this._usersService.getResult(data.userUrl, data.followersUrl).subscribe(
                data => {
                    console.log(data[0]);
                    console.log(data[1]);
                },
                () => console.log("error"),
                () => console.log("completed")
            )
            //     this._usersService.getResult(data.userUrl, data.followersUrl)
            //     .subscribe(data =>{ console.log("hello");
            //         // this.user_avatar_url = dat
            //         // console.log(data)
            //     // console.log("This is the data", data[0]);
            //     // console.log("An array", data[1]);
            //     // console.log("These are the followers", data.followers);
            // }))
        })
    }
}
