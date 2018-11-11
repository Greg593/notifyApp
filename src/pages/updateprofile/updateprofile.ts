import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { AuthProvider } from '../../providers/auth/auth';
import { Http, Headers } from '@angular/http';

/**
 * Generated class for the UpdateprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateprofile',
  templateUrl: 'updateprofile.html',
})
export class UpdateprofilePage {

  usuarios; any;
  loading: any;
  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioService: UsuariosProvider, public authService: AuthProvider,
    public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log(this.authService.token);

  }

  showLoader() {

    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    this.loading.present();

  }
}
