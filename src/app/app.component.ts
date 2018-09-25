import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog';
  cover: string;
  heading: string;
  subheading: string;
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe( x => {
      console.log(x.heading);
    });
  }
}
