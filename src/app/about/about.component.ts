import { Component, OnInit } from '@angular/core';
import {SharingService} from '../_services/sharing.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private sharingService: SharingService) {
    this.sharingService.cover = 'assets/img/about-bg.jpg';
    this.sharingService.heading = 'About';
    this.sharingService.subheading = 'another subheading';
  }

  ngOnInit() {
  }

}
