import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { BusesProvider } from '../../providers/buses/buses';
import { AuthProvider } from '../../providers/auth/auth';
import { DetallebusPage } from '../detallebus/detallebus';


@Component({
  selector: 'page-buses',
  templateUrl: 'buses.html',
})
export class BusesPage {

  buses: any;
  loading: any;
  usuario: any;
 
  constructor(public navCtrl: NavController, public busService: BusesProvider, 
    public modalCtrl: ModalController, public alertCtrl: AlertController, 
    public authService: AuthProvider, public loadingCtrl: LoadingController) {
 
  }
 
  ionViewDidLoad(){
    this.busService.getBuses().then((data) => {        
      this.buses = data;
      console.log("datos" + data);  
    }, (err) => {
        console.log("no hay nada en buses");
    });
 
  }
 
  addBus(){
 
    let prompt = this.alertCtrl.create({
      title: 'Agregar Bus',
      message: 'Ingresa los datos siguientes:',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre Bus'
        },
        {
          name: 'placa',
          placeholder: 'Placa'
        },
        {
          name: 'centra',
          placeholder: 'Número CENTRA'
        }
      ],
      buttons: [
        {
          text: 'QR'
        },
        {
          text: 'Cancelar'
        },
        {
          text: 'Guardar',
          handler: bus => {
 
                if(bus){
 
                    this.showLoader();
 
                    this.busService.createBus(bus).then((result) => {
                        this.loading.dismiss();
                        this.buses = result;
                        console.log("bus created");
                    }, (err) => {
                        this.loading.dismiss();
                        console.log("not allowed");
                    });
 
                }
 
 
          }
        }
      ]
    });
 
    prompt.present();
 
  }
 
  deleteBus(bus){
 
    this.showLoader();
 
    //Remove from database
    this.busService.deleteBus(bus._id).then((result) => {
 
      this.loading.dismiss();
 
      //Remove locally
        let index = this.buses.indexOf(bus);
 
        if(index > -1){
            this.buses.splice(index, 1);
        }  
 
    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }

  verBus(bus){
    this.navCtrl.push(DetallebusPage);
  }

  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
 
    this.loading.present();
 
  }
 
}
 