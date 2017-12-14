import { ProductPage } from './../product/product';
import { ProfilePage } from './../profile/profile';
import { OrderPage } from './../order/order';
import { Component } from '@angular/core';
import { ModalController, NavParams, NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public modalCtrl: ModalController) {

  }

     dismiss() {
       this.viewCtrl.dismiss({"data":"XD"});
     }

     goToOrder(){
      // this.navCtrl.push(OrderPage);

      const profileModal = this.modalCtrl.create(OrderPage);

          profileModal.onDidDismiss(data => {
            console.log(data);
          });
          profileModal.present();
     }

     goToSchedule(){
      this.navCtrl.push(ProfilePage);
     }
     goToProduct(){
      // this.navCtrl.push(BusinessPage);
      const profileModal = this.modalCtrl.create(ProductPage);

      profileModal.onDidDismiss(data => {
        console.log(data);
      });
      profileModal.present();
    }

}
