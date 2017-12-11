import {  Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from './models/question-base';
import { QuestionControlService }    from './services/question-control.service';
import {
  NavController, NavParams, ModalController,
  ToastController, ViewController, Events
} from 'ionic-angular';

import { AppData } from '../providers/app-data';
import { UserData } from '../providers/user-data';
import { ChemicalsPage } from '../pages/chemicals/chemicals';
import { AssessmentsPage } from '../pages/assessments/assessments';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { FormConstituentsPage } from '../pages/form-constituents/form-constituents';
import { AddAssessmentPage  } from '../pages/add-assessment/add-assessment';


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
  assessmentTerm: boolean;
  completedAssessment: any[];
  currentKey: any;

  constructor(
    private qcs: QuestionControlService,
     public toastCtrl: ToastController,
     public navCtrl: NavController,
     public navParams: NavParams,
     public appData: AppData,
     public userData: UserData,
     public modalCtrl: ModalController,
     public af: AngularFire,
     public auth$: AuthService,
     public viewCtrl: ViewController,
     public events: Events
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
    this.completedAssessment = [];
    this.currentKey = '';

  //fROM fIREBASE
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
    // this.addObservable = this.af.database.list('/users/' + uid + '/' + formKey );

   this.addObservable = this.af.database.list('/users/' + uid + '/assessments/');
   let keyWrappedFormData =  formData;
     this.addObservable.push( {
        basicInfo: formData[0]['basicInfo'],
        assessmentReview: formData[0]['assessmentReview']
      }).then((snap) => {
         firebase.database().ref('/users/' + uid + '/assessments/' + snap.key )
         .update({
            key: snap.key,
            constituents: ' ',
            tasks: ' '
          });
          for (var constituent of  formData[0]['constituents']) {
              firebase.database().ref('/users/' + uid + '/assessments/' + snap.key + '/constituents/' )
              .push(constituent);
          }
          for (var task of  formData[0]['assessmentTasks']) {
              firebase.database().ref('/users/' + uid + '/assessments/' + snap.key + '/tasks/' )
              .push(task);
          }
         }).catch((error) => {
             let toast = this.toastCtrl.create({
               message: 'Adding ' + formKey + ' \n Failed :( ' + error,
               duration: 4000,
               position: 'middle',
               cssClass: "toast-message"
             });
     });
  }
  onSave() {
     let formKey = this.questions[0].key;
     this.payLoad = this.form.value;

     if(formKey == "basicInfo"){
         let currentData = { "basicInfo": this.payLoad };
         localStorage.removeItem("basicInfo");
         localStorage.setItem("basicInfo", JSON.stringify(this.payLoad) );
         let toast = this.toastCtrl.create({
            message:  ' Added \n ' + 'User Info',
            duration: 3000,
            position: 'middle',
            cssClass: "toast-message"
          });
          toast.present();
          this.form.reset();
          this.navCtrl.parent.select(1);
     }
     if(formKey == "constituents"){
         // let conName = this.form.value[2];
         this.addedConstituents.push(this.payLoad);
         let currentData = { "constituents": this.payLoad };
         localStorage.setItem("constituents", JSON.stringify(this.addedConstituents) );

        // To update global array to show current constituents
         let eventsConstituentsData = JSON.parse(localStorage.getItem("constituents"));
         this.events.publish("constituents", eventsConstituentsData );
         // clear form
         this.form.reset()
         let toast = this.toastCtrl.create({
            message:  'Added \n ' + 'Constituent',
            duration: 3000,
            position: 'middle',
            cssClass: "toast-message"
          });
          toast.present();
          this.navCtrl.parent.select(2);
     }
     if(formKey == "assessmentTasks"){
       this.addedAssessmentTasks.push( this.payLoad);
       let currentData = { "assessmentTasks": this.payLoad };
       localStorage.setItem("assessmentTasks", JSON.stringify(this.addedAssessmentTasks) );

        // To update global array to show current tasks
         let eventsTasksData = JSON.parse(localStorage.getItem("assessmentTasks"));
         this.events.publish("assessmentTasks", eventsTasksData );
         // clear form
         this.form.reset()
         let toast = this.toastCtrl.create({
            message:  'Added \n ' + 'Tasks',
            duration: 3000,
            position: 'middle',
            cssClass: "toast-message"
          });
          toast.present();
          this.navCtrl.parent.select(3);
     }
  }

  onSubmit() {
      let formKey = this.questions[0].key;
      let formRoot = this.questions[0].value;
      this.payLoad = this.form.value;

      if(formKey == "assessmentReview"){
          let currentData = { "assessmentReview": this.payLoad };
          localStorage.removeItem("assessmentReview");
          localStorage.setItem("assessmentReview", JSON.stringify(this.payLoad) );
      }
      // Collect all assessment form data into one array object
      this.completedAssessment.push(
          {
            "basicInfo": JSON.parse(localStorage.getItem("basicInfo")),
            "constituents": JSON.parse(localStorage.getItem("constituents")),
            "assessmentTasks": JSON.parse(localStorage.getItem("assessmentTasks")),
            "assessmentReview": JSON.parse(localStorage.getItem("assessmentReview"))
          }
      );
      let formData = this.completedAssessment;
      console.log(formData);

      this.formRootCheck(formRoot, formData, formKey );

       this.form.reset();
       // this.navCtrl.pop(AddAssessmentPage);
       // this.navCtrl.push(AssessmentsPage);
       this.viewCtrl.dismiss(AddAssessmentPage);
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
