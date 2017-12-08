import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from './models/question-base';
import { QuestionControlService }    from './services/question-control.service';
import { NavController, NavParams, ModalController, ToastController, ViewController } from 'ionic-angular';

import { AppData } from '../providers/app-data';
import { UserData } from '../providers/user-data';
import { ChemicalsPage } from '../pages/chemicals/chemicals';
import { AssessmentsPage } from '../pages/assessments/assessments';
import { DashboardPage } from '../pages/dashboard/dashboard';

//Angularfire2
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2';
import { AuthService } from '../providers/auth-service';

declare var firebase;
@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  providers: [ QuestionControlService ]
})

export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  shownGroup = null;
  addObservable: FirebaseListObservable<any>;
  assessmentData:  any[];
  currentAssessmentData: any[];
  addedConstituents: any[];
  addedAssessmentTasks: any[];
  constructor(
    private qcs: QuestionControlService,
     public toastCtrl: ToastController,
     public navCtrl: NavController,
     public appData: AppData,
     public userData: UserData,
     public modalCtrl: ModalController,
     public af: AngularFire,
     public auth$: AuthService,
     public viewCtrl: ViewController
  ) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.questions[0].key);
    console.log(this.questions[0].value);
    console.log(this.questions);
    console.log(this.form);
    this.currentAssessmentData = [];
    this.addedConstituents = [];
    this.addedAssessmentTasks = [];
    this.assessmentData =  [];

     this.appData.getAssessments().then(
       assessmentData => {
       this.assessmentData = assessmentData;
       // this.assessmentData = assessmentData.filter((filter) => {
       //    return filter.key === "-L-mAxGsTk5QRkoqBEFQ";
       // });
       // console.log(assessmentData);
     });
  }


  formRootCheck(formRoot, formData, formKey ){
        this.sendFirebaseUser(formData, formKey);
  }

  // sendFirebaseRoot(formData, formKey){
  //
  //   let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]"));
  //   let uid = authData.uid;
  //
  //  this.addObservable = this.af.database.list('/' + formKey + '/' );
  //
  //   this.addObservable.push( formData ).then((snap) => {
  //       firebase.database().ref( '/' + formKey + '/' + snap.key ).update({ key: snap.key});
  //          let pushJSONString = JSON.stringify(formData);
  //
  //          let toast = this.toastCtrl.create({
  //            message:  ' Added \n ' + formKey,
  //            duration: 10000,
  //            position: 'middle',
  //            cssClass: "toast-message"
  //          });
  //          toast.present();
  //     }).catch((error) => {
  //           let toast = this.toastCtrl.create({
  //             message: 'Adding ' + formKey + ' \n Failed :( ' + error,
  //             duration: 7000,
  //             position: 'middle',
  //             cssClass: "toast-message"
  //           });
  //    });
  // }

  sendFirebaseUser(formData, formKey){

    let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]"));
    let uid = authData.uid;


    console.log(this.assessmentData);
   // this.addObservable = this.af.database.list('/users/' + uid + '/' + formKey );

   this.addObservable = this.af.database.list('/users/' + uid + '/assessments/');
   let keyWrappedFormData = '/' + formKey +'/'+ formData;
   this.addObservable.push( keyWrappedFormData ).then((snap) => {
          let currentKey = snap.key;
          let assessmentKey = this.assessmentData.filter((filter) => {
             return filter.key === currentKey;
          });
          if( currentKey !== assessmentKey){
            firebase.database()
            .ref('/users/' + uid + '/assessments/' + currentKey )
            .update({
               key: currentKey
             });
          }
          if( currentKey == assessmentKey){
                if( formKey == 'basicInfo'){
                       firebase.database()
                       .ref('/users/' + uid + '/assessments/' + currentKey )
                       .update({
                          basicInfo: formData
                        });
                          let pushJSONString = JSON.stringify(formData);
                          console.log( snap.key);
                          let snapKey = snap.key;
                          let toast = this.toastCtrl.create({
                            message:  ' Added \n ' + formKey,
                            duration: 4000,
                            position: 'middle',
                            cssClass: "toast-message"
                          });
                          toast.present();
                }
                if( formKey == 'constituents'){
                       firebase.database()
                       .ref('/users/' + uid + '/assessments/' + currentKey )
                       .update({
                          constituents: formData
                        });
                          let pushJSONString = JSON.stringify(formData);
                          console.log( snap.key);
                          let snapKey = snap.key;
                          let toast = this.toastCtrl.create({
                            message:  ' Added \n ' + formKey,
                            duration: 4000,
                            position: 'middle',
                            cssClass: "toast-message"
                          });
                          toast.present();
                }
          }

       }).catch((error) => {
             let toast = this.toastCtrl.create({
               message: 'Adding ' + formKey + ' \n Failed :( ' + error,
               duration: 4000,
               position: 'middle',
               cssClass: "toast-message"
             });
   });

   // if( formKey == 'constituents'){
   //   this.addObservable = this.af.database.list('/users/' + uid + '/assessments/');
   //
   //   let keyWrappedFormData = '/' + formKey +'/'+ formData;
   //   this.addObservable.push( keyWrappedFormData ).then((snap) => {
   //       firebase.database()
   //       .ref('/users/' + uid + '/assessments/' + snap.key )
   //       .update({
   //          key: snap.key,
   //          constituents: formData
   //        });
   //          let pushJSONString = JSON.stringify(formData);
   //
   //          let toast = this.toastCtrl.create({
   //            message:  ' Added \n ' + formKey,
   //            duration: 4000,
   //            position: 'middle',
   //            cssClass: "toast-message"
   //          });
   //          toast.present();
   //     }).catch((error) => {
   //           let toast = this.toastCtrl.create({
   //             message: 'Adding ' + formKey + ' \n Failed :( ' + error,
   //             duration: 4000,
   //             position: 'middle',
   //             cssClass: "toast-message"
   //           });
   //    });
   // }


   // this.addObservable.push( formData ).then((snap) => {
   //     firebase.database().ref('/users/' + uid + '/' + formKey + '/' + snap.key ).update({ key: snap.key});
   //        let pushJSONString = JSON.stringify(formData);
   //
   //        let toast = this.toastCtrl.create({
   //          message:  ' Added \n ' + formKey,
   //          duration: 4000,
   //          position: 'middle',
   //          cssClass: "toast-message"
   //        });
   //        toast.present();
   //   }).catch((error) => {
   //         let toast = this.toastCtrl.create({
   //           message: 'Adding ' + formKey + ' \n Failed :( ' + error,
   //           duration: 4000,
   //           position: 'middle',
   //           cssClass: "toast-message"
   //         });
   //  });

  }
  onSave() {
     let formKey = this.questions[0].key;
     this.payLoad = this.form.value;

     if(formKey == "basicInfo"){
         let currentData = { "basicInfo": this.payLoad };
         localStorage.removeItem("basicInfo");
         localStorage.setItem("basicInfo", JSON.stringify(this.payLoad) );
     }
     if(formKey == "constituents"){
         // let conName = this.form.value[2];
         this.addedConstituents.push( this.payLoad);
         let currentData = { "constituents": this.payLoad };
         localStorage.setItem("constituents", JSON.stringify(this.addedConstituents) );
     }
     if(formKey == "assessmentTasks"){
       this.addedAssessmentTasks.push( this.payLoad);
       let currentData = { "assessmentTasks": this.payLoad };
       localStorage.setItem("assessmentTasks", JSON.stringify(this.addedAssessmentTasks) );
     }
  }

 //  addEntry(formKey, formData) {
 //     // Parse any JSON previously stored in allEntries
 //     var existingData = JSON.parse(localStorage.getItem("currentData"));
 //     if(existingEntries == null) existingEntries = [];
 //     var entry = {
 //         formKey: formData
 //     };
 //     localStorage.setItem(formKey, JSON.stringify(entry));
 //     // Save allEntries back to local storage
 //     existingEntries.push(entry);
 //     localStorage.setItem("currentData", JSON.stringify(existingEntries));
 // }

  onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);

        let formData = this.form.value;
        console.log(formData);
        let formKey = this.questions[0].key;
        let formRoot = this.questions[0].value;

       this.formRootCheck(formRoot, formData, formKey );

       this.viewCtrl.dismiss();
       // this.navCtrl.push(AssessmentsPage);
   }



   toggleGroup(group) {
       if (this.isGroupShown(group)) {
           this.shownGroup = null;
       } else {
           this.shownGroup = group;
       }
   }
   isGroupShown(group) {
       return this.shownGroup === group;
   }

}
