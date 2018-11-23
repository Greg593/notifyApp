import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { BusesPage } from '../buses/buses';
import { UpdateprofilePage } from '../updateprofile/updateprofile';
import { HistoryPage } from '../history/history';
import { LogoutPage } from '../logout/logout';
import { NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  parms: any;
  user: any;
  usuario: any;
  
  tab1Root = HomePage;
  tab2Root = BusesPage; 
  tab3Root = UpdateprofilePage;
  tab4Root = HistoryPage;
  tab5Root = AboutPage;
  tab6Root = LogoutPage

  constructor(parms: NavParams, public data: DataProvider) {

    this.usuario = JSON.stringify(this.data.paramData);     
    console.log(this.usuario);

    
    
  }
}
