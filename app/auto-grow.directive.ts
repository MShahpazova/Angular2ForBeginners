import {Directive, ElementRef, Renderer} from 'angular2/core';
@Directive ({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    constructor(el: Element, renderer: Renderer){
        
    }
    // inside the method below we access the host element
     onFocus(){

     }
} 