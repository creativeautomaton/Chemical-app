import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssessmentBasicInfoQuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'page-form-assessment-basic',
  templateUrl: 'form-assessment-basic.html',
  providers:  [AssessmentBasicInfoQuestionService]
})
export class FormAssessmentBasicPage {
  questions: any[]; 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AssessmentBasicInfoQuestionService
) {
    service.getAssessmentBasicInfoQuestions().then(questions => this.questions = questions);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormAssessmentBasicPage');
  }

}
