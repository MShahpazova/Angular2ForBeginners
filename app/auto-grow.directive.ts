import {Directive} from 'angular2/core';
@Directive ({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
     
}