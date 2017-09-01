import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from './models/question-base';
import { QuestionControlService }    from './services/question-control.service';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { AppData } from '../providers/app-data';
import { UserData } from '../providers/user-data';

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

  diseases = [
    { title: "Type 1 Diabetes", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
    { title: "Multiple Sclerosis", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
    { title: "Crohn's & Colitis", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." },
    { title: "Lupus", description: "Systemic lupus erythematosus (lupus) is a chronic, systemic autoimmune disease which can damage any part of the body, including the heart, joints, skin, lungs, blood vessels, liver, kidneys and nervous system." },
    { title: "Rheumatoid Arthritis", description: "Rheumatoid arthritis (RA) is an autoimmune disease in which the body's immune system mistakenly begins to attack its own tissues, primarily the synovium, the membrane that lines the joints." }
  ];

  constructor(
    private qcs: QuestionControlService,
     public toastCtrl: ToastController,
     public navCtrl: NavController,
     public appData: AppData,
     public userData: UserData,
     public modalCtrl: ModalController,
     public af: AngularFire,
     public auth$: AuthService
  ) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.questions[0].key);
    console.log(this.questions[0].value);
    console.log(this.questions);
    console.log(this.form);
  }



  formRootCheck(formRoot, formData, formKey ){
        this.sendFirebaseUser(formData, formKey);
  }

  sendFirebaseRoot(formData, formKey){

    let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]"));
    let uid = authData.uid;

   this.addObservable = this.af.database.list('/' + formKey + '/' );

    this.addObservable.push( formData ).then((snap) => {
        firebase.database().ref( '/' + formKey + '/' + snap.key ).update({ key: snap.key});
           let pushJSONString = JSON.stringify(formData);

           let toast = this.toastCtrl.create({
             message:  ' Added \n ' + formKey,
             duration: 10000,
             position: 'middle',
             cssClass: "toast-message"
           });
           toast.present();
      }).catch((error) => {
            let toast = this.toastCtrl.create({
              message: 'Adding ' + formKey + ' \n Failed :( ' + error,
              duration: 7000,
              position: 'middle',
              cssClass: "toast-message"
            });
     });
  }

  sendFirebaseUser(formData, formKey){

    let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]"));
    let uid = authData.uid;

   this.addObservable = this.af.database.list('/users/' + uid + '/' + formKey );

    this.addObservable.push( formData ).then((snap) => {
        firebase.database().ref('/users/' + uid + '/' + formKey + '/' + snap.key ).update({ key: snap.key});
           let pushJSONString = JSON.stringify(formData);

           let toast = this.toastCtrl.create({
             message:  ' Added \n ' + formKey,
             duration: 4000,
             position: 'middle',
             cssClass: "toast-message"
           });
           toast.present();
      }).catch((error) => {
            let toast = this.toastCtrl.create({
              message: 'Adding ' + formKey + ' \n Failed :( ' + error,
              duration: 4000,
              position: 'middle',
              cssClass: "toast-message"
            });
     });
  }
  onSubmit() {
      this.payLoad = JSON.stringify(this.form.value);

      let formData = this.form.value;
      let formKey = this.questions[0].key;
      let formRoot = this.questions[0].value;

      this.formRootCheck(formRoot, formData, formKey );
            console.log(formData);
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
