import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Quote } from "../../data/quote.interface";
import { QuoteService } from "../../services/quote.service";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quoteService: QuoteService) {

  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

}
