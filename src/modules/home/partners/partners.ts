import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { MenuPage } from '../../business/menu/menu';

@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html'
})
export class PartnersPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  goToBusiness(){
    // this.navCtrl.push(BusinessPage);
    const profileModal = this.modalCtrl.create(MenuPage);

    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

}
