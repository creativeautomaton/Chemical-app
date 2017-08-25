import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { UserData } from '../../providers/user-data';
import { AppData } from '../../providers/app-data';
import { SplashPage } from '../splash/splash';
import { InitalSettingsPage } from '../inital-settings/inital-settings';

//Angularfire2
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods  } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  items: FirebaseListObservable<any[]>;

  login: {username?: string, email?: string, password?: string} = {};

  //errors at this line
  //   const pd_0:any = ((<any>this.context.onLogin(this._NgForm_23_3.context)) !== false);

  submitted = false;

  constructor(
    public navCtrl: NavController,
    public userData: UserData,
    public appData: AppData,
    public af: AngularFire,
    private _auth: AuthService
  ) {
    this.af.auth.subscribe(auth => console.log(auth));
 }


 // Facebook auth sign for later use
 /*
 signInWithFacebook(): void {
      this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this._auth.displayName());
  }
 */
  // for firebase add this to ----   onLogin(form){    ------ if fails, then test with
  // email: string, password: string): any
  onLogin(form){
    this.submitted = true;

    if (form.valid) {
      // Email and password
      this.af.auth.login({
        email: this.login.username,
        password: this.login.password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then((success) => {
        this.userData.login(this.login.username);

        this.appData.getUserData().then( userData => {
            let firsttime = userData.firsttime;
            if(firsttime != true){
              this.navCtrl.push(SplashPage);
              this.navCtrl.setRoot(SplashPage);
            }else{
              this.navCtrl.push(InitalSettingsPage);
              this.navCtrl.setRoot(InitalSettingsPage);
            }
        });

        //this.appData.GetUserData();
        console.log("Firebase success: " + JSON.stringify(success));
      })
      .catch((error) => {
        console.log("Firebase failure: " + JSON.stringify(error));
      });

      //this.userData.login(this.login.username);
      //this.navCtrl.push(SplashPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
