import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssessmentQuestionService } from '../../dynamicForm/services/question.service';

/*
  Generated class for the FormAssessmentBasicPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form-assessment-basic',
  templateUrl: 'form-assessment-basic.html',
  providers:  [AssessmentQuestionService]
})
export class FormAssessmentBasicPage {
  questions: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    service: AssessmentQuestionService
) {
    service.getAssessmentQuestions().then(questions => this.questions = questions);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormAssessmentBasicPage');
  }

}
