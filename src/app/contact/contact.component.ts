import { Component, OnInit } from '@angular/core';
import {SharingService} from '../_services/sharing.service';
import {HeadingInfo} from '../_models/heading-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private sharingService: SharingService) {
    this.initData();
  }

  ngOnInit() {
  }

  public initData(): void {
    const headingData = new HeadingInfo();
    headingData.cover = 'assets/img/contact-bg.jpg';
    headingData.heading = 'Contact Us';
    headingData.subheading = 'Always listening, Always understanding';
    this.sharingService.setNewHeadingInfo(headingData);
  }

}
