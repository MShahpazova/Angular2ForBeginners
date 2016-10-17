import {Component} from 'angular2/core';
 import {CourseService} from './course.service';
@Component({selector: 'course',
            template: `
            <h2>Courses</h2>
            {{title}}
            <ul>
                <li *ngFor="#course of courses">{{course}}</li>
            </ul>
            `,
             providers: [CourseService]
        }) 
            
export class CoursesComponent {
    title: string = "This is the title of the courses page"
    courses;
    
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
        
    }
}

