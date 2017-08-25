import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChemicalQuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'page-add-chemicals',
  templateUrl: 'add-chemicals.html',
  providers:  [ChemicalQuestionService]
})
export class AddChemicalsPage {
   questions: any[];

  constructor(public navCtrl: NavController, service: ChemicalQuestionService) {
    service.getChemicalQuestions().then(questions => this.questions = questions);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChemicalsPage');
  }

}
