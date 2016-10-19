import {Component} from 'angular2/core'
import {AuthorsService} from './authors.service'

@Component({selector: 'author',
            template: `
            <h2>Authors</h2>
            {{title}}
            <ul>
            <li *ngFor='#author of authors'> {{author}} </li>
            </ul>`,
            providers: [AuthorsService]
        })
        export class  AuthorsComponent {
            title: string = 'Title for the authors page';
            authors: string [];

            constructor(authorsService: AuthorsService) {
                this.authors = ["Standhal", "Borges", "Markes"];
            }
        }