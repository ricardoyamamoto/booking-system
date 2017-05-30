import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Booking System';
  courses: Course[];
  constructor() {
    this.courses = [
      {
      'academy': 'EASY',
      'year': 2017,
      'title': 'ITO',
      'education': 'Computer Science',
      'lecturer': 'Lars Bilde'
      },
      {
        'academy': 'EASY',
        'year': 2017,
        'title': 'Test',
        'education': 'Computer Science',
        'lecturer': 'Lars Bilde'
      }
    ];
  }

}
