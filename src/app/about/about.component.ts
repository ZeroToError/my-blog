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
    headingData.heading = 'Chẳng là ai cả...';
    headingData.subheading = 'Tôi không cảm thấy cần biết chính xác tôi là ai. Điều thú vị chính trong cuộc sống và trong công việc là trở thành con người khác so với lúc ta khởi đầu';
    this.sharingService.setNewHeadingInfo(headingData);
  }
}
