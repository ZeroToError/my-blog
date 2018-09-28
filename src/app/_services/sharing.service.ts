import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';
import {HeadingInfo} from '../_models/heading-info';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private _headingInfo: BehaviorSubject<HeadingInfo> = new BehaviorSubject<HeadingInfo>(new HeadingInfo());

  public setNewHeadingInfo(newInfo: HeadingInfo): void {
    this._headingInfo.next(newInfo);
  }

  public getHeadingInfo(): BehaviorSubject<HeadingInfo> {
    return this._headingInfo;
  }

}
