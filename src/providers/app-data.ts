import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserData } from './user-data';

//Angularfire2
import { AngularFire, FirebaseObjectObservable  } from 'angularfire2';
import { AuthService } from './auth-service';

let apiKey = 'AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30';

@Injectable()
export class AppData {

  data: any;
  afdata: FirebaseObjectObservable<any>;
  myArray: any;
  rootData: any;
  apiKey = 'firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]';

  constructor(public http: Http, public userData: UserData, public af: AngularFire, public auth$: AuthService ) {
  this.GetUserData(userData);
  this.afdata = this.afdata;
  console.log('Loaded AppData Provider');
  let apiKey = 'firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]';
}
  GetUserData(userData){
   firebase.auth().onAuthStateChanged( (user) => {
     if (user) {
       //let uid = user.id;
       this.afdata = this.af.database.object('/users/' + this.auth$.id() );
     } else {
       this.afdata = this.af.database.object('/');
     }
   });
  }


  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
        //this.http.get('assets/data/data.json')
          // let apiKey = 'firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]';
          let authData = JSON.parse(localStorage.getItem(this.apiKey));

          console.log("app-data UID:" + authData.uid);
           let uid = authData.uid;
           if(authData !== null){
               this.af.database.object('/users/' + uid ).subscribe( res => {
                 this.data = this.processData(res);
                 resolve(this.data);
               });
           }
      });
  }

  rootLoad() {
    if (this.rootData) {
      return Promise.resolve(this.rootData);
    }
    return new Promise(resolve => {
        //this.http.get('assets/data/data.json')
          // let apiKey = 'firebase:authUser:AIzaSyDbyyqecHuX45qTnEw7v9rUW7SbTSeKJ30:[DEFAULT]';
          let authData = JSON.parse(localStorage.getItem(this.apiKey));
          console.log("root load initalized" );

           if(authData !== null){
               this.af.database.object('/' ).subscribe( res => {
                 this.rootData = this.processData(res);
                 resolve(this.rootData);
               });
           }
      });
  }


  processData(data) {
    data.tracks = [];

    return data;
  }


  getCurrentLocation() {
    return this.load().then( data => {
      return data.users.currentlocation;
    });
  }

  getUserData() {
    return this.load().then( data => {
      return data;
    });
  }

  getMap() {
    return this.load().then(
      data => {
        // Returns each object entered as ankey in an array
        return Object.keys(data.devices.map).map(key => data.devices.map[key]);
      });
  }

  getSingleDeviceMap() {

    // return this.load().then( data => {
    //   return data.devices.map;
    // });

    return this.load().then(
      data => {
        // Returns each object entered as ankey in an array
      return Object.keys(data.devices.map).map( key => data.devices.map[key] );
      });
  }

  getVendors() {
    return this.rootLoad().then(
      rootData => {
          // return data.vendors.hazelwood;
        // Returns each object entered as ankey in an array
        return Object.keys(rootData.vendors.hazelwood).map( key => rootData.vendors.hazelwood[key] );
      });
  }

  getChemicals() {
    return this.load().then(
      data => {
        // Returns each object entered as ankey in an array
      return Object.keys(data.chemicals).map( key => data.chemicals[key] );
      });
  }
  getAssessments() {
    return this.load().then(
      data => {
        // Returns each object entered as ankey in an array
      return Object.keys(data.assessments).map( key => data.assessments[key] );
      });
  }
  

  // Uses rootLoad Function
  getAllDevices() {
    return this.rootLoad().then( rootData => {
            //return rootData.alldevices;
            // Returns each object entered as ankey in an array
            return Object.keys(rootData.alldevices).map( key => rootData.alldevices[key] );
      });
  }
  getFaqs() {
    return this.rootLoad().then( rootData => {
            // return rootData.faqs;
            // Returns each object entered as ankey in an array
            return Object.keys(rootData.faqs).map( key => rootData.faqs[key] );
      });
  }


}
