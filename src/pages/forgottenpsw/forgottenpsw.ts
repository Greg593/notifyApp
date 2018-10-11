import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgottenpswPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgottenpsw',
  templateUrl: 'forgottenpsw.html',
})
export class ForgottenpswPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgottenpswPage');
  }

  recuperarCuenta(){
    console.log("Se debería enviar un correo");
  }

}
