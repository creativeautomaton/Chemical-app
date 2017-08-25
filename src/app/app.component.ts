import { Component, ViewChild, Inject } from '@angular/core';

import { Events, MenuController, Nav, Platform, ToastController, ModalController } from 'ionic-angular';
import { BackgroundMode, Splashscreen, StatusBar } from 'ionic-native';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
//import { TutorialPage } from '../pages/tutorial/tutorial';
//import { PaymentPage } from '../pages/payment/payment';
import { SplashPage } from '../pages/splash/splash';
import { InitalSettingsPage } from '../pages/inital-settings/inital-settings';
import { ChemicalsPage } from '../pages/chemicals/chemicals';
import { AddChemicalsPage } from '../pages/add-chemicals/add-chemicals';
import { AssessmentsPage } from '../pages/assessments/assessments';
import { FaqPage } from '../pages/faq/faq';
import { AddFaqPage } from '../pages/add-faq/add-faq';

//Angularfire2
import { AuthService } from '../providers/auth-service';
import { AngularFire, FirebaseListObservable, FirebaseRef,  /* AuthProviders, AuthMethods, FirebaseAuthState */  FirebaseAuth} from 'angularfire2';

import { AppData } from '../providers/app-data';
import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
}


@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  //private authState: FirebaseAuthState;
  public firsttime: any;

  afdata: FirebaseListObservable<any>;

  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  appPages: PageInterface[] = [
    // { title: 'FAQs', component: FaqPage, icon: 'list-box' }
  ];
  loggedInPages: PageInterface[] = [
    { title: 'Chemicals', component: ChemicalsPage, icon: 'water' },
    { title: 'Assessments', component: AssessmentsPage, icon: 'list-box' },
    { title: 'Account', component: AccountPage, icon: 'person' },
    { title: 'Logout', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', component: LoginPage, icon: 'log-in' },
    { title: 'Signup', component: SignupPage, icon: 'person-add' },
    { title: 'FAQs', component: FaqPage, icon: 'list-box' }
  ];

  rootPage: any = LoginPage;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    platform: Platform,
    public appdata: AppData,
    appData: AppData,
    public auth$: FirebaseAuth,
    private _auth: AuthService,
    public af: AngularFire,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {
    // Call any initial plugins when ready
    platform.ready().then(() => {

      StatusBar.styleDefault();
      Splashscreen.hide();

      firebase.auth().onAuthStateChanged( (user) => {

        if (user) {
          // load the conference data
          appData.load();
          // User is signed in.
          console.log('Firebase Auth: ' , user, user.uid);

          this.appdata.getUserData().then( userData => {
              let firsttime = userData.firsttime;
                console.log('firsttime: ' , firsttime);
              if(firsttime != true){
                this.nav.push(SplashPage);
                this.nav.setRoot(SplashPage);
              }else{
                this.nav.push(InitalSettingsPage);
                this.nav.setRoot(InitalSettingsPage);
              }
          });

          // this.rootPage = SplashPage;
          this.enableMenu(true);

          let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]"));

          if( authData !== null){
            // Loop function to check apps geolocation every 15 sec.
          }
        } else {
          // No user is signed in.
          console.log('Firebase Auth None');
          this.rootPage = LoginPage;
          this.enableMenu(false);
        } // End of user if conditional
      });
    });
    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });

    this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index});
    } else {
      this.nav.setRoot(page.component);
    }
    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.af.auth.logout();
        this.userData.logout();

        let toast = this.toastCtrl.create({
          message:  'Logged Out',
          duration: 2000,
          position: 'middle'
        });
        toast.present();
      }, 400);
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}
