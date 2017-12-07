import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssessmentConstituentsQuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'page-form-constituents',
  templateUrl: 'form-constituents.html',
  providers:  [AssessmentConstituentsQuestionService]
})
export class FormConstituentsPage {
  questions: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AssessmentConstituentsQuestionService
  ) { 
    service.getAssessmentConstituentsQuestions().then(questions => this.questions = questions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormConstituentsPage');
  }

}
