import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssessmentReviewQuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'page-form-review',
  templateUrl: 'form-review.html',
  providers:  [AssessmentReviewQuestionService]
})
export class FormAssessmentReviewPage {
  questions: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AssessmentReviewQuestionService
) {
    service.getAssessmentReviewQuestions().then(questions => this.questions = questions);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormAssessmentBasicPage');
  }

   assessmentTerms() {
     console.log('agreed to the terms');
   }

}
