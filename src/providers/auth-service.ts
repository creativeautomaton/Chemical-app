import { Injectable } from '@angular/core';
import { AngularFire, /* AuthProviders, AuthMethods, FirebaseListObservable, */ FirebaseAuth, FirebaseAuthState,  FirebaseObjectObservable  } from 'angularfire2';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
//import { Facebook } from 'ionic-native';

/*
  Generated class for the AuthService provider.
 
*/
@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;
  afdata: FirebaseObjectObservable<any>;
  // afDataList: FirebaseListObservable<any>;

  constructor(
    public http: Http,
    public auth$: FirebaseAuth,
    private platform: Platform,
    public af: AngularFire,
    // public AuthMethods: AuthMethods,
    // public AuthProviders: AuthProviders

  ) {

    console.log('Loaded AuthService Provider');
    //  this.authState = auth$af.auth.subscribe()
    //this.authState = auth$.getAuth();
    //  auth$.subscribe((state: FirebaseAuthState) => {
    //    this.authState = state;
    //  });

    // let state = af.auth.subscribe();
    // this.authState = state;
     af.auth.subscribe( (state: FirebaseAuthState) => {
       this.authState = state;
     }, error => {
        console.log(error);
     });

    console.log(' AuthService states: ' + this.authState);
  }

  get authenticated(): boolean {
   return this.authState !== null;
 }

 id(): string {
    return this.authenticated ? this.authState.uid : '';
}


GetUserData(user){
 firebase.auth().onAuthStateChanged( (user) => {
   if (user) {
    //  let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyAAtcKO33syRnUKRfhuWet3UCQ1bw9M5Mw:[DEFAULT]"));
     this.afdata = this.af.database.object('/users/' + user.uid );
   } else {
     this.afdata = this.af.database.object('/');
   }
 });
}


 // signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
 //   if (this.platform.is('cordova')) {
 //     Facebook.login(['email', 'public_profile']).then(res => {
 //       const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
 //       return firebase.auth().signInWithCredential(facebookCredential);
 //     });
 //   } else {
 //     return this.auth$.login({
 //       provider: AuthProviders.Facebook,
 //       method: AuthMethods.Popup
 //     });
 //   }
 //
 // }

  signOut(): void {
    this.auth$.logout();
  }

  // displayName(): string {
  //   if (this.authState != null) {
  //     return this.authState.facebook.displayName;
  //   } else {
  //     return '';
  //   }
  // }


}
