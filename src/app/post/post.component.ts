import {Component, OnInit} from '@angular/core';
import {SharingService} from '../_services/sharing.service';
import {HeadingInfo} from '../_models/heading-info';
import {Post} from '../_models/post';
import {PostService} from '../_services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private sharingService: SharingService,
              private postService: PostService,
              private route: ActivatedRoute) {
    this.initData();
    this.post = new Post();
  }

  post: Post;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPost(id);
  }

  public initData(): void {

  }

  getPost(id: number) {
    this.postService.getPostById(id).subscribe(data => {
      this.post = data;
      this.setHeading('assets/img/post-bg.jpg', this.post.title, this.post.description);
    });
  }

  setHeading(cover: string, heading: string, subheading: string) {
    const headingData = new HeadingInfo();
    headingData.cover = cover;
    headingData.heading = heading;
    headingData.subheading = subheading;
    this.sharingService.setNewHeadingInfo(headingData);
  }

}
