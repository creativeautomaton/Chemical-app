import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { ChemicalsPage } from '../chemicals/chemicals';
import { AssessmentsPage } from '../assessments/assessments';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = DashboardPage;
  tab2Root: any = ChemicalsPage;
  tab3Root: any = AssessmentsPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
