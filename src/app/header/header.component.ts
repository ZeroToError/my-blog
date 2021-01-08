import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SharingService} from '../_services/sharing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public cover: string;
  public heading: string;
  public subheading: string;

  public constructor(private sanitizer: DomSanitizer,
                     private sharingService: SharingService,
                     private route: Router) {
    this.sharingService.getHeadingInfo().subscribe(data => {
      this.cover = data.cover;
      this.heading = data.heading;
      this.subheading = data.subheading;
    });
  }

  safeUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.cover})`);
  }
}
