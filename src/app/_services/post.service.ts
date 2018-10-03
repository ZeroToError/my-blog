import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {POST_PATH} from '../_constants/resource_path';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  pageSubject: BehaviorSubject<number>;
  postPerPageInHome = 3;
  constructor(private httpService: HttpClient) {
    this.pageSubject = new BehaviorSubject<number>(0);
  }

  public changePage(page: number) {
    this.pageSubject.next(page);
  }

  public getPage(): number {
    return this.pageSubject.getValue();
  }


  getPosts(): Observable<any> {
    return this.httpService.get(POST_PATH);
  }

  getPostsPaging(page: number): Observable<any> {
    const url = POST_PATH + '?page=' +  page + '&size=' + this.postPerPageInHome + '&sort=createdAt';
    return this.httpService.get(url);
  }

  getPostById(id: number): Observable<any> {
    const url = POST_PATH + '/' + id;
    return this.httpService.get(url);
  }

}
