import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AssessmentTasksQuestionService } from '../../dynamicForm/services/question.service';


@Component({
  selector: 'page-form-assessment-tasks',
  templateUrl: 'form-assessment-tasks.html',
  providers:  [AssessmentTasksQuestionService]
})
export class FormAssessmentTasksPage {
  questions: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: AssessmentTasksQuestionService
  ) {
    service.getAssessmentTasksQuestions().then(questions => this.questions = questions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormAssessmentTasksPage');
  }

}
