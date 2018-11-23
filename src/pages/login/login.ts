import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth/auth';
import { ForgottenpswPage } from '../forgottenpsw/forgottenpsw';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    email: string;
    password: string;
    loading: any;

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public authService: AuthProvider, public navParams: NavParams, public data: DataProvider) {
    }

    ionViewDidLoad() {
        this.showLoader();

        //Check if already authenticated    
        this.authService.checkAuthentication().then((res) => {
            console.log("Ya te has logueado");
            this.loading.dismiss();
            console.log(this.authService.storage);            
            this.navCtrl.setRoot(TabsPage);
        }, (err) => {
            console.log("Usuario NO autorizado");
            this.loading.dismiss();
        });

    }



    login() {

        this.showLoader();

        let credentials = {            
            email: this.email,
            password: this.password        
        };

        this.authService.login(credentials).then((result) => {
            this.loading.dismiss(); 
            const userInfo = JSON.stringify(result);    
            //console.log(JSON.parse(userInfo));
            var obj = JSON.parse(userInfo);        
            var values = [];
            values = Object.keys(obj).map(function (key) { return obj[key]; });
            //console.log(values[1]);     
            
            
            this.data.paramData = values[1];
            
            this.navCtrl.setRoot(TabsPage);
        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });

    }

    launchSignup() {
        this.navCtrl.push(SignupPage);
    }

    resetPassword(){
        this.navCtrl.push(ForgottenpswPage);
    }

    showLoader() {

        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });

        this.loading.present();

    }
}