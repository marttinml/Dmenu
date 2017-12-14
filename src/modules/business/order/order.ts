import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {

  }

     dismiss() {
       this.viewCtrl.dismiss({"data":"XD"});
     }


     request(){
      this.navCtrl.setRoot(PartnersPage);
     }

}
