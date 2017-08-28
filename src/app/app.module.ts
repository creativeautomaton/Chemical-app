import {  NgModule, ErrorHandler  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';

import { ConferenceApp } from './app.component';

//Pages
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SplashPage } from '../pages/splash/splash';
import { PaymentPage } from '../pages/payment/payment';
import { InitalSettingsPage } from '../pages/inital-settings/inital-settings';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { FaqPage } from '../pages/faq/faq';
import { AddFaqPage } from '../pages/add-faq/add-faq';


// Paragon IH Pages
import { AssessmentsPage } from '../pages/assessments/assessments';
import { ChemicalsPage } from '../pages/chemicals/chemicals';
import { AddChemicalsPage } from '../pages/add-chemicals/add-chemicals';
import { AddAssessmentPage } from '../pages/add-assessment/add-assessment';

//Providers
import { AuthService } from '../providers/auth-service';
import { AppData } from '../providers/app-data';
import { UserData } from '../providers/user-data';

// /dynamic forms
import { DynamicFormComponent }         from '../dynamicForm/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../dynamicForm/dynamic-form-question.component';

let apiKey = 'AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30';

export const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "chemapp.firebaseapp.com",
    databaseURL: "https://chemapp.firebaseio.com",
    projectId: "firebase-chemapp",
    storageBucket: "firebase-chemapp.appspot.com",
    messagingSenderId: "198697304544"
};

@NgModule({
  declarations: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    InitalSettingsPage,
    SplashPage,
    PaymentPage,
    DisclaimerPage,
    FaqPage,
    AddFaqPage,
    ChemicalsPage,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    AssessmentsPage,
    AddChemicalsPage,
    AddAssessmentPage,
    DashboardPage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp),
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AddChemicalsPage,
    ConferenceApp,
    AccountPage,
    LoginPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    InitalSettingsPage,
    SplashPage,
    PaymentPage,
    DisclaimerPage,
    FaqPage,
    AddFaqPage,
    ChemicalsPage,
    AssessmentsPage,
    AddAssessmentPage,
    DashboardPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},  AuthService, AppData, UserData, Storage]
})
export class AppModule {}
