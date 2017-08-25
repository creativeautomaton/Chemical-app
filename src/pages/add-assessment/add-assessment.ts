import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssessmentQuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'page-add-assessment',
  templateUrl: 'add-assessment.html',
  providers:  [AssessmentQuestionService]
})
export class AddAssessmentPage {
  questions: any[];

  constructor(public navCtrl: NavController, service: AssessmentQuestionService) {
    service.getAssessmentQuestions().then(questions => this.questions = questions);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAssessmentPage');
  }

}
