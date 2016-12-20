System.register(['angular2/core', './users.service', 'angular2/http', 'rxjs/Subject', './sign-up-form.component'], function(exports_1, context_1) {
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
    var core_1, users_service_1, http_1, Subject_1, sign_up_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (sign_up_form_component_1_1) {
                sign_up_form_component_1 = sign_up_form_component_1_1;
            }],
        execute: function() {
            // import {SubscriptionFormComponent} from './subscription-form.component'
            AppComponent = (function () {
                function AppComponent(ngZone, _usersService) {
                    this.ngZone = ngZone;
                    this._usersService = _usersService;
                    this.isLoading = true;
                    this.userData = new Subject_1.Subject();
                    this.userData$ = this.userData.asObservable();
                    this.followers = [];
                    this.myevent = new core_1.EventEmitter();
                    // this._usersService.getProfile().subscribe(profile => {
                    //     this.profile_url = profile.avatar_url;
                    //     this.isLoading = false})
                    //     this._usersService.getFollowers().subscribe(followers => {
                    //          this.followers = followers;
                    //         console.log(followers);
                    // })
                }
                AppComponent.prototype.keyDownFunction = function (event) {
                    if (event.keyCode == 13) {
                        var value = document.getElementById('user-name').value;
                        console.log(document.getElementById('user-name').value);
                        this.userName = document.getElementById('user-name').value;
                        this.profile_url = "https://api.github.com/users/" + this.userName;
                        this._urlFollowers = "https://api.github.com/users/" + this.userName + "/followers";
                        this.userData.next({
                            userUrl: this.profile_url,
                            followersUrl: this._urlFollowers
                        });
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userData$.subscribe(function (data) {
                        _this._usersService.getResult(data.userUrl, data.followersUrl).subscribe(function (data) {
                            console.log(data[0]);
                            console.log(data[1]);
                        }, function () { return console.log("error"); }, function () { return console.log("completed"); });
                        //     this._usersService.getResult(data.userUrl, data.followersUrl)
                        //     .subscribe(data =>{ console.log("hello");
                        //         // this.user_avatar_url = dat
                        //         // console.log(data)
                        //     // console.log("This is the data", data[0]);
                        //     // console.log("An array", data[1]);
                        //     // console.log("These are the followers", data.followers);
                        // }))
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   \n       <div *ngIf=\"false\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n        <form (keydown)=\"keyDownFunction($event)\">\n          <label for=\"user-name\">Search for user</label>\n          <input #user type=\"text\" id=\"user-name\" value=\"\">\n        </form>\n       <div *ngIf=\"!isLoading\"><img src={{profile_url}} alt=\"Smiley face\" height=\"42\" width=\"42\"/> </div>\n        <ul>\n          <li *ngFor=\"#follower of followers\">\n            <img src = {{follower.avatar_url}} alt=\"Smiley face\" height=\"42\" width=\"42\"/>\n          </li>            \n        </ul>\n        <signup-form></signup-form>\n\n     ",
                        directives: [sign_up_form_component_1.SignUpFormComponent],
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone, users_service_1.UsersService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map