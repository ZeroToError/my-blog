import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs/index';
import {POST_PATH} from '../_constants/resource_path';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../_models/post';
import {catchError, tap} from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    const url = POST_PATH + '/excludeContent' + '?page=' +  page + '&size=' + this.postPerPageInHome + '&sort=createdAt,desc';
    return this.httpService.get(url);
  }

  getPostById(id: number): Observable<any> {
    const url = POST_PATH + '/' + id;
    return this.httpService.get(url);
  }

  getPostByTitle(title: string): Observable<any> {
    const url = POST_PATH + '/get-by-title/' + title;
    return this.httpService.get(url);
  }

  publishPost(newPost: Post): Observable<Post> {
    return this.httpService.post<Post>(POST_PATH, newPost, httpOptions).pipe(
      tap((post: Post) => console.log(`added new post w/ id=${post.id}`)),
      catchError(this.handleError<Post>('addHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
