import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FaqQuestionService } from '../../dynamicForm/services/question.service';
/*
  Generated class for the AddFaq page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-faq',
  templateUrl: 'add-faq.html',
   providers:  [FaqQuestionService]
})
export class AddFaqPage {
   questions: any[];

  constructor(public navCtrl: NavController, service: FaqQuestionService) {
    service.getFaqQuestions().then(questions => this.questions = questions);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFaqPage');
  }

}
