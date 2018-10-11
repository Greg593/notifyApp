import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { BusesProvider } from '../../providers/buses/buses';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-buses',
  templateUrl: 'buses.html',
})
export class BusesPage {

  buses: any;
  loading: any;
 
  constructor(public navCtrl: NavController, public busService: BusesProvider, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: AuthProvider, public loadingCtrl: LoadingController) {
 
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
      title: 'Add Bus',
      message: 'Describe your bus below:',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
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

  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
 
}
 