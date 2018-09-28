import {Component, OnInit} from '@angular/core';
import {SharingService} from '../_services/sharing.service';
import {HeadingInfo} from '../_models/heading-info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private sharingService: SharingService) {
    this.initData();
  }

  ngOnInit() {
  }

  public initData(): void {
    const headingData = new HeadingInfo();
    headingData.cover = 'assets/img/about-bg.jpg';
    headingData.heading = 'About Us';
    headingData.subheading = 'We do what we say';
    this.sharingService.setNewHeadingInfo(headingData);
  }
}
