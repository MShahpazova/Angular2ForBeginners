System.register(['angular2/core', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map', 'rxjs/Observable', 'rxjs/add/observable/forkJoin', 'rxjs/add/observable/fromArray', 'rxjs/add/operator/delay'], function(exports_1, context_1) {
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
    var core_1, Observable_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            AppComponent = (function () {
                //  We can use the static Observable.of() method to create an observable from a list of
                // arguments:
                function AppComponent() {
                    //method is used for running an async operation at specified intervals
                    var userStream = Observable_1.Observable.of({
                        userId: 1, username: 'mosh'
                    }).delay(2000);
                    var tweetStream = Observable_1.Observable.fromArray([1, 2, 3]).delay(1500);
                    Observable_1.Observable.forkJoin(userStream, tweetStream)
                        .map(function (joined) { return new Object({ user: joined[0], tweets: joined[1] }); })
                        .subscribe(function (result) { return console.log(result); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map