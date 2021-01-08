import {Component} from '@angular/core';
import {SharingService} from './_services/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog';

  constructor(public sharingService: SharingService) {

  }
}
