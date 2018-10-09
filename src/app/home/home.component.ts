import {Component, OnInit} from '@angular/core';
import {SharingService} from '../_services/sharing.service';
import {HeadingInfo} from '../_models/heading-info';
import {of} from 'rxjs/index';
import {Post} from '../_models/post';
import {PostService} from '../_services/post.service';
import {QuoteService} from '../_services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList: Post[];
  currentPage: number;
  totalPages: number;
  constructor(private sharingService: SharingService,
              private postService: PostService,
              private quoteService: QuoteService) {
    this.initData();
    this.currentPage = 0;
  }

  ngOnInit() {
    this.getPostList();
  }


  getPostList() {
    this.postService.getPostsPaging(this.currentPage).subscribe(data => {
      this.totalPages = +data['totalPages'];
      if (data['content'].length) {
        this.postList = data['content'];
      } else {
        alert('Hết cmn bài đăng rồi!');
      }
    }, error2 => {
    });
  }


  initData(): void {
    const headingData = new HeadingInfo();
    headingData.cover = 'assets/img/home-bg.jpg';
    headingData.subheading = this.quoteService.getRandomQuote();
    headingData.heading = '...';
    this.sharingService.setNewHeadingInfo(headingData);
  }

  getNextPosts() {
    this.currentPage++;
    this.getPostList();
    console.log(this.currentPage);
  }

  getPreviousPosts() {
    this.currentPage--;
    this.getPostList();
  }
}
