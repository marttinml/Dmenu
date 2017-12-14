import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecurityPage } from '../security/security'
import { RegisterPage } from '../register/register'

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {

  }

  continue() {
    this.navCtrl.push(SecurityPage);
    // this.navCtrl.push(RegisterPage);
  }

}
