import {Component, OnInit} from '@angular/core';
import {SharingService} from '../_services/sharing.service';
import {HeadingInfo} from '../_models/heading-info';
import {of} from 'rxjs/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private sharingService: SharingService
  ) {
    this.initData();
  }

  ngOnInit() {


  }
  private initData(): void {
    const headingData = new HeadingInfo();
    headingData.cover = 'assets/img/home-bg.jpg';
    headingData.subheading = 'subheading ne';
    headingData.heading = 'Heading day';
    this.sharingService.setNewHeadingInfo(headingData);
  }
}
