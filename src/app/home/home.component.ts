import {Component, OnInit} from '@angular/core';
import {SharingService} from '../_services/sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sharingService: SharingService) {
    this.sharingService.cover = 'assets/img/home-bg.jpg';
    this.sharingService.heading = 'Home';
    this.sharingService.subheading = 'subheading';
  }

  ngOnInit() {

  }

}
