import { Injectable } from '@angular/core';
import {quotes} from '../_constants/quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  public getRandomQuote(): string {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}
