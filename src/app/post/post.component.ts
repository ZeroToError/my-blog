import { Component, OnInit } from '@angular/core';
import {SharingService} from '../_services/sharing.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private sharingService: SharingService) {
    this.sharingService.cover = 'assets/img/post-bg.jpg';
    this.sharingService.heading = 'My Post';
    this.sharingService.subheading = 'another subheading';
  }

  ngOnInit() {
  }



}
