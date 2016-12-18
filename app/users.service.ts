import {Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import {Injectable} from'angular2/core';

@Injectable()
export class UsersService {
    // @Input() username;
    private userName: String;


    // private _urlFollowers = "https://api.github.com/users/octocat/followers"

    constructor(private _http: Http) {

    }

    method1(user_url: string) {
        var observable = this._http.get(user_url);
        return observable;
    }

    getProfile(profile_url: string): Observable<any> {
        return this._http.get(profile_url)
    }
    getFollowers(followers_url: string): Observable<any> {
        return this._http.get(followers_url)
    }

    getResult(profileUrl: string, followers_url: string) {
        var observable = Observable.forkJoin([this.getProfile(profileUrl), this.getFollowers(followers_url)])
        return observable;

        //    .map(joined => 
        //     new Object({user: joined[0], followers: joined[1]})
        //     )
        // debugger
    }
    // createPost(post: Post){
    //     return this._http.post(this._url,JSON.stringify(post))
    //     .map(res => res.json)
}