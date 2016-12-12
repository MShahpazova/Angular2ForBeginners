import {Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'like',
    template: `<i class="glyphicon glyphicon-heart"
     [class.highlighted]="iLike"
     (click)="onClick()">
     </i>
     <span> {{totalLikes}}</span>
     `,
     styles: [`
     .glyphicon-heart {
         color: #ccc;
         cursor: pointer;
         <i class="glyphicon glyphicon-heart"
        }
     .highlighted {
         color: deeppink;    
        }
    `]
})

export class LikeComponent {
    @Input() iLike = false;
    @Input() totalLikes = 0;
      @Output() change = new EventEmitter();
    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
        this.change.emit({newValue: this.iLike})
    }
}