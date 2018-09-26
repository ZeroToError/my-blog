import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  public cover: string;
  public heading: string;
  public subheading: string;

  constructor() {
  }
}
