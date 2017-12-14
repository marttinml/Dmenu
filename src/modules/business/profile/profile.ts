import { Component } from '@angular/core';
import { ModalController, NavParams, NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public modalCtrl: ModalController) {

  }


}
