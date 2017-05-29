import { Component } from '@angular/core';
import { Course } from './course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the course planner';
  courses: Course[];

  constructor() {
    this.courses = [
      {
        'academy': 'EASY',
        'year': 2017,
        'title': 'Angular 2',
        'education': 'Computer Science',
        'lecturer': 'Lars bilde'
      },
      {
        'academy': 'EASY',
        'year': 2017,
        'title': 'ITO',
        'education': 'Computer Science',
        'lecturer': 'Lars bilde'
      }

    ];
  }
}
