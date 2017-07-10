import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { Quote } from "../../data/quote.interface";
import { QuoteService } from "../../services/quote.service";
import { QuotePage } from "../quote/quote";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quoteService: QuoteService, private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }

}
