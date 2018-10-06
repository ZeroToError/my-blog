import {Component, OnInit} from '@angular/core';
import {SharingService} from '../_services/sharing.service';
import {HeadingInfo} from '../_models/heading-info';
import {of} from 'rxjs/index';
import {Post} from '../_models/post';
import {PostService} from '../_services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList: Post[];
  currentPage: number;

  constructor(private sharingService: SharingService,
              private postService: PostService) {
    this.initData();
    this.currentPage = 0;

  }

  ngOnInit() {
    this.getPostList();
  }


  getPostList() {
    this.postService.getPostsPaging(this.currentPage).subscribe(data => {
      if (data['content'].length) {
        this.postList = data['content'];
      } else {
        alert('No more posts available!');
      }
    });
  }


  initData(): void {
    const headingData = new HeadingInfo();
    headingData.cover = 'assets/img/home-bg.jpg';
    headingData.subheading = 'subheading ne';
    headingData.heading = 'Heading day';
    this.sharingService.setNewHeadingInfo(headingData);
  }

  getNextPosts() {
    this.currentPage++;
    this.getPostList();
  }
}
