import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PartnersPage } from '../../home/partners/partners';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }

  // goBack() {
  //   this.navCtrl.pop();
  // }

  continue() {
    // this.navCtrl.push(SecurityPage);
    // this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(PartnersPage);
  }

}
