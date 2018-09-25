import {Component, Input, OnInit} from '@angular/core';

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
  ) { }

  ngOnInit() {
  }
}
