import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authService: AuthProvider,) {

  }

  logout() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
    //this.app.getRootNav().setRoot(LoginPage);
  }

  about(){
    this.navCtrl.push(AboutPage);
  }
}
