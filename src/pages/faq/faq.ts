import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheet, ActionSheetController, Config, ToastController, ModalController } from 'ionic-angular';

import { AddFaqPage } from '../add-faq/add-faq';
import { AppData } from '../../providers/app-data';

//Angularfire2
import { AngularFire,  FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {
    actionSheet: ActionSheet;
    remove: FirebaseListObservable<any>;
    faqs:  any[];
    keys:  any[];
    mine: boolean = true;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public appData: AppData,
    public config: Config,
    public af: AngularFire,
    public auth: AuthService,
    public modalCtrl: ModalController
  ) {
    this.faqs =  [];
    this.keys =  [];
    this.remove = af.database.list('/faqs/', { preserveSnapshot: true } );
    this.keys = this.navParams.get('key');
   }

    ionViewDidLoad() {
      console.log('ionViewDidLoad Faqs Page');
      this.faqs =  [];

       this.appData.getFaqs().then(
         faqData => {
           this.faqs = faqData;
          //  this.faqs = faqData.filter((filter) => {
          //     return filter.type === "device";
          //  });
           console.log(faqData);
         });
    }

    addFaq(){
      let modal = this.modalCtrl.create(AddFaqPage);
      modal.onDidDismiss(data => {
       console.log(data);
     });
      modal.present();
    }
}
