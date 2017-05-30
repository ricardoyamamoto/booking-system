import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'cp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Booking System';
  courses: Course[];


  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

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
