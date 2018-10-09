import { Component, OnInit } from '@angular/core';
import {HeadingInfo} from '../_models/heading-info';
import {SharingService} from '../_services/sharing.service';
import {Post} from '../_models/post';
import {PostService} from '../_services/post.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  composeType: string;

  newPost: Post
  constructor(private sharingService: SharingService,
              private postService: PostService) {
    this.initData();
    this.composeType = 'both';
    this.newPost = new Post();
  }

  ngOnInit() {
  }

  public initData(): void {
    const headingData = new HeadingInfo();
    headingData.cover = 'assets/img/about-bg.jpg';
    headingData.heading = 'Hãy tạo ra những tác phẩm để đời nào!';
    headingData.subheading = 'Đừng sai chính tả nhé :v';
    this.sharingService.setNewHeadingInfo(headingData);
  }

  setComposeType(composeType: string) {
    this.composeType = composeType;
  }

  submitNewPost() {
    this.postService.publishPost(this.newPost).subscribe(result => {
      window.location.reload();
    }, error => {
      alert(error.toString());
    });
  }
}
