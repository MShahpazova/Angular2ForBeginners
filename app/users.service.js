System.register(['angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/observable/forkJoin', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, Observable_1, core_1;
    var UsersService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UsersService = (function () {
                // private _urlFollowers = "https://api.github.com/users/octocat/followers"
                function UsersService(_http) {
                    this._http = _http;
                }
                UsersService.prototype.method1 = function (user_url) {
                    var observable = this._http.get(user_url);
                    return observable;
                };
                UsersService.prototype.getProfile = function (profile_url) {
                    return this._http.get(profile_url);
                };
                UsersService.prototype.getFollowers = function (followers_url) {
                    return this._http.get(followers_url);
                };
                UsersService.prototype.getResult = function (profileUrl, followers_url) {
                    var observable = Observable_1.Observable.forkJoin([this.getProfile(profileUrl), this.getFollowers(followers_url)]);
                    return observable;
                    //    .map(joined => 
                    //     new Object({user: joined[0], followers: joined[1]})
                    //     )
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsersService);
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});
//# sourceMappingURL=users.service.js.map