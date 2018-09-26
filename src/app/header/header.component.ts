import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() cover: string;
  @Input() heading: string;
  @Input() subheading: string;
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
  }

  safeUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.cover})`);
  }
}
