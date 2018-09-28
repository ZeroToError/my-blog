import { Component, OnInit } from '@angular/core';
import {SharingService} from '../_services/sharing.service';
import {HeadingInfo} from '../_models/heading-info';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private sharingService: SharingService) {
    this.initData();
  }
  data = '# Header\n' +
    '---\n' +
    'Ahihi Do ngoc  \n' +
    '*Het bai*  \n' +
    '[Follow me](#)';
  ngOnInit() {
  }

  public initData(): void {
    const headingData = new HeadingInfo();
    headingData.cover = 'assets/img/post-bg.jpg';
    headingData.heading = 'This is a post';
    headingData.subheading = 'Some more words';
    this.sharingService.setNewHeadingInfo(headingData);
  }



}
