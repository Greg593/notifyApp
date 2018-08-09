import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showLoader();

      //Check if already authenticated
      this.authService.checkAuthentication().then((res) => {
          console.log("Ya te has logueado");
          this.loading.dismiss();
          this.navCtrl.setRoot(HomePage);
      }, (err) => {
          console.log("Usuario NO autorizado");
          this.loading.dismiss();
      });

  }

  login(){

      this.showLoader();

      let credentials = {
          email: this.email,
          password: this.password
      };

      this.authService.login(credentials).then((result) => {
          this.loading.dismiss();
          console.log(result);
          this.navCtrl.setRoot(HomePage);
      }, (err) => {
          this.loading.dismiss();
          console.log(err);
      });

  }

  launchSignup(){
      this.navCtrl.push(SignupPage);
  }

  showLoader(){

      this.loading = this.loadingCtrl.create({
          content: 'Autenticando...'
      });

      this.loading.present();

  }
  }

}
