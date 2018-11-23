import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertaUserProvider } from '../../providers/alerta-user/alerta-user';
import { AlertasProvider } from '../../providers/alertas/alertas';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alertas: any;
  alerta: String;
  loading: any;

  constructor(public http: Http, public navCtrl: NavController,
    public authService: AuthProvider, public alertasProvider: AlertasProvider,
    public loadingCtrl: LoadingController, public alertaUsuarioProvider: AlertaUserProvider) {

  }

  ionViewDidLoad() {
    this.alertasProvider.getAlerta().then((data) => {
      this.alertas = data;
      console.log("datos alertas: " + data);
    }, (err) => {
      console.log("no hay nada en alertas");
    });

  }

  enviarAlerta(alerta) {

    this.showLoader();
 
    let details = {
        alerta: this.alerta
    };
 
    console.log("mis datos: " + alerta);
    this.alertaUsuarioProvider.createAlerta(details).then((result) =>{
      this.loading.dismiss();
      console.log(result);      
    }, (err) => {
      this.loading.dismiss();
      console.log(err);
    })    
    console.log(alerta);
}

  showLoader() {

    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();

  }

}
