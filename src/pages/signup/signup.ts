import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';
 
@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
 
  role: string;
  email: string;
  password: string;
  dpi: string;
  loading: any;
 
  constructor(public navCtrl: NavController, public authService: AuthProvider, public loadingCtrl: LoadingController) {
 
  }
 
  register(){
 
    this.showLoader();
 
    let details = {
        email: this.email,
        password: this.password,
        dpi: this.dpi,
        role: this.role
    };
 
    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
        this.loading.dismiss();
    });
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
 
}