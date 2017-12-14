import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {

  }

  dismiss() {
    this.viewCtrl.dismiss({"data":"XD"});
  }

  add(){
    this.dismiss();
  }

}
