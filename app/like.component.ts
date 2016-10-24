import {Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'like',
    template: `<i class="glyphicon glyphicon-heart"
     [style.color]="isLiked ? 'deepPink' : lightGrey"
     (click)="onClick()">
     </i>`
})

export class LikeComponent {
    @Input() isLiked = false;
      @Output() change = new EventEmitter();
    onClick(){
        this.isLiked = !this.isLiked;
        this.change.emit({newValue: this.isLiked})
    }
}