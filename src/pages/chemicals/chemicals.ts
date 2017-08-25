import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheet, ActionSheetController, Config, ToastController, ModalController  } from 'ionic-angular';

import { AddChemicalsPage } from '../add-chemicals/add-chemicals';

import { AppData } from '../../providers/app-data';

//Angularfire2
import { AngularFire,  FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-chemicals',
  templateUrl: 'chemicals.html'
})
export class ChemicalsPage {

  actionSheet: ActionSheet;
  removeChemical: FirebaseListObservable<any>;
  removeAllChemicals: FirebaseListObservable<any>;
  chemicals:  any[];
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
    this.chemicals =  [];
    this.keys =  [];
    this.removeChemical = af.database.list('/users/' + this.auth.id() + '/chemicals/', { preserveSnapshot: true } );
    this.removeAllChemicals = af.database.list('/allchemicals/', { preserveSnapshot: true } );
    this.keys = this.navParams.get('key');
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad ChemicalsPage');

    this.chemicals =  [];

     this.appData.getChemicals().then(
       chemicalData => {
         this.chemicals = chemicalData;
        //  this.chemicals = chemicalData.filter((filter) => {
        //     return filter.type === "device";
        //  });
         console.log(chemicalData);
       });


   }

   addCustomerButton(){
     let modal = this.modalCtrl.create(AddChemicalsPage);
     modal.onDidDismiss(data => {
      console.log(data);
    });
     modal.present();
   }

}
