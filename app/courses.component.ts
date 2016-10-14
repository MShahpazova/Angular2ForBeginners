import {Component} from 'angular2/core';
@Component({selector: 'course',
            template: `
            <h2>Courses</h2>
            {{title}}
            <ul>
                <li *ngFor="#course of courses"></li>
            </ul>
            `
        }) 
            
export class CoursesComponent {
    title: string = "This is the title of the courses page"
    courses = ["Course1", "Course2", "Course3"]
}