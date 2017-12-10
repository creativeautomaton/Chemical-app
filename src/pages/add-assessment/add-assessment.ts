import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';

// Form Steps Tabs
import { FormAssessmentBasicPage } from '../form-assessment-basic/form-assessment-basic';
import { FormConstituentsPage } from '../form-constituents/form-constituents';
import { FormAssessmentTasksPage } from '../form-assessment-tasks/form-assessment-tasks';
import { FormAssessmentReviewPage } from '../form-review/form-review';

@Component({
  selector: 'page-add-assessment',
  templateUrl: 'add-assessment.html'
})
export class AddAssessmentPage {
  // set the root pages for each tab
  tab1Root: any = FormAssessmentBasicPage;
  tab2Root: any = FormConstituentsPage;
  tab3Root: any = FormAssessmentTasksPage;
  tab4Root: any = FormAssessmentReviewPage;
  mySelectedIndex: number;

  constructor(
      public viewCtrl: ViewController,
      public navCtrl: NavController,
      public navParams: NavParams
  ) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
  ionViewDidLoad() {
    // Store
    localStorage.setItem("currentData", null);
    console.log('ionViewDidLoad AddAssessmentPage');
  }
  //  dismiss() {
  //     this.viewCtrl.dismiss();
  // }


}
