import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { AssessmentConstituentsQuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'page-form-constituents',
  templateUrl: 'form-constituents.html',
  providers:  [AssessmentConstituentsQuestionService]
})
export class FormConstituentsPage {
  questions: any[];
  currentConstituents: any[];
  localData: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AssessmentConstituentsQuestionService,
    public events: Events
  ) {
    this.currentConstituents = [];
    this.localData = [];
    service.getAssessmentConstituentsQuestions().then(questions => this.questions = questions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormConstituentsPage');
    this.events.subscribe('constituents', (currentData) => {
        // for (i = 0; i > currentData.length; i++){
          this.currentConstituents = currentData;
        // }
        // console.log(currentData);
    });
  }

  removeConstituent(currentConstituents){
      // let eventData = this.events.publish('constituents');
      // console.log(eventData);
      console.log( currentConstituents );
      let localData = JSON.parse(localStorage.getItem('constituents'));
      console.log(localData);
      let removeData = this.currentConstituents.filter((filter) => {
          return filter.cas !== currentConstituents;
      });
      console.log(removeData);
      this.currentConstituents = removeData;
      localStorage.setItem('constituents', JSON.stringify(removeData));

  }

}
