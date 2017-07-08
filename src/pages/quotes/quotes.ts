import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { Quote } from "../../data/quote.interface";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  };

  constructor(private navParams: NavParams) {
  }

  // ngOnInit() is executed before the page is rendered
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // Add elvis operator (?) in template to use this approach
  // }

}
