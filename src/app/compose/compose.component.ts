import { Component, OnInit } from '@angular/core';
import {HeadingInfo} from '../_models/heading-info';
import {SharingService} from '../_services/sharing.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  data: string;
  composeType: string;

  constructor(private sharingService: SharingService) {
    this.initData();
    this.composeType = 'both';
  }

  ngOnInit() {
  }

  public initData(): void {
    const headingData = new HeadingInfo();
    headingData.cover = 'assets/img/about-bg.jpg';
    headingData.heading = 'Composer';
    headingData.subheading = 'Write your own story';
    this.sharingService.setNewHeadingInfo(headingData);
  }

  setComposeType(composeType: string) {
    this.composeType = composeType;
  }
}
