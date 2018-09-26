import { Component, OnInit } from '@angular/core';
import {SharingService} from '../_services/sharing.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private sharingService: SharingService) {
    this.sharingService.cover = 'assets/img/contact-bg.jpg';
    this.sharingService.heading = 'Contact';
    this.sharingService.subheading = 'another subheading';
  }

  ngOnInit() {

  }

}
