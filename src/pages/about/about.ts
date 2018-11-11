import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public popover: PopoverController) {

  }

  mostrarTexto(){
    const popover = this.popover.create("");
    popover.present();
  }

}
