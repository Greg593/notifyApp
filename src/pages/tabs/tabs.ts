import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { BusesPage } from '../buses/buses';
import { UpdateprofilePage } from '../updateprofile/updateprofile';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BusesPage; 
  tab3Root = UpdateprofilePage;
  tab4Root = HistoryPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
