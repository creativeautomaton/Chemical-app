import { Injectable }       from '@angular/core';
import { QuestionID } from '../models/question-id';
import { DropdownQuestion } from '../models/question-dropdown';
import { CheckboxQuestion } from '../models/question-checkbox';
import { RangeQuestion } from '../models/question-range';
import { QuestionBase }     from '../models/question-base';
import { TextboxQuestion }  from '../models/question-textbox';


@Injectable()
export class ChemicalQuestionService {
  // Todo: get from a remote source of question metadata
  getQuestions(): Promise<QuestionBase<any>[]> {
    let questions: QuestionBase<any>[] = [

       new QuestionID ({
          key: 'chemicals',
          value: 'false'
        }),

      // new CheckboxQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),

      new RangeQuestion({
        key: 'ph',
        options: [
          {
            label: 'PH Range',
            key: 'ph-1',
            min: '0',
            max: '14',
            step: '1'
          },
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'chemicalName',
        label: 'Chemical Name',
        value: ' ',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'manufacturerID',
        label: 'Manufacturer ID',
        value: ' ',
        required: false,
        order: 2
      }),

    new TextboxQuestion({
      key: 'CAS',
      label: 'CAS',
      value: ' ',
      required: false,
      order: 2
    }),

     new TextboxQuestion({
       key: 'flashPoint',
       label: 'Flash Point',
       value: ' ',
       required: false,
       order: 2
     }),

    new TextboxQuestion({
      key: 'vaporPressure',
      label: 'Vapor Pressure',
      value: ' ',
      required: false,
      order: 2
    }),

    new TextboxQuestion({
      key: 'evaporationRate',
      label: 'Evaporation Rate',
      value: ' ',
      required: false,
      order: 2
    }),

    new TextboxQuestion({
      key: 'ph',
      label: 'Ph',
      value: ' ',
      required: false,
      order: 2
    }),

    new TextboxQuestion({
      key: 'gasAndVapor',
      label: 'Gas and Vapor',
      value: ' ',
      required: false,
      order: 2
    }),

    new TextboxQuestion({
      key: 'mistAndParticulate',
      label: 'Mist/Particulate',
      value: ' ',
      required: false,
      order: 2
    }),

    new TextboxQuestion({
      key: 'healthEffect',
      label: 'Health Effect',
      value: ' ',
      required: false,
      order: 2
    }),
      // new TextboxQuestion({
      //   key: 'emailAddress',
      //   label: 'Email',
      //   type: 'email',
      //   order: 3,
      //   required: true
      // })
    ];

    return Promise.resolve(questions.sort((a, b) => a.order - b.order));
  }

  getChemicalQuestions(): Promise<QuestionBase<any>[]> {
    return new Promise<QuestionBase<any>[]>(resolve =>
      setTimeout(resolve, 1350)) // delay 2 seconds
      .then(() => this.getQuestions());
  }
}

export class AssessmentQuestionService {
  // Todo: get from a remote source of question metadata
  getQuestions(): Promise<QuestionBase<any>[]> {

    let questions: QuestionBase<any>[] = [

       new QuestionID ({
          key: 'assessments',
          value: 'false'
        }),

      new TextboxQuestion({
        key: 'Title',
        label: 'Task Title',
        value: ' ',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'ProcessTitle',
        label: 'Process Title',
        value: ' ',
        required: false,
        order: 2
      }),

      new TextboxQuestion({
        key: 'Location',
        label: 'Location',
        value: ' ',
        required: false,
        order: 2
      }),

      new TextboxQuestion({
        key: 'RiskAssesor',
        label: 'Risk Assesor',
        value: ' ',
        required: false,
        order: 2
      }),

      new TextboxQuestion({
        key: 'Description',
        label: 'What is the Task being Assesed?',
        value: ' ',
        required: false,
        order: 2
      }),

      new CheckboxQuestion({
        key: 'peopleEffected',
        label: 'Who are the people affected by this task? ',
        options: [
          {key: 'operator',  value: 'Operator'},
          {key: 'employees',  value: 'Employees'},
          {key: 'visitors',   value: 'Visitors'},
          {key: 'expectant-mothers',  value: 'New and expectant mothers'},
          {key: 'disabled',  value: 'Disabled'},
          {key: 'visitors',   value: 'Visitors'},
          {key: 'contractors', value: 'Contractors'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'HazardousSubstances',
        label: 'What hazardous substances are being used in this task?',
        value: ' ',
        required: false,
        order: 2
      })

    ];

    return Promise.resolve(questions.sort((a, b) => a.order - b.order));
  }

  getAssessmentQuestions(): Promise<QuestionBase<any>[]> {
    return new Promise<QuestionBase<any>[]>(resolve =>
      setTimeout(resolve, 1350)) // delay 2 seconds
      .then(() => this.getQuestions());
  }
}

export class FaqQuestionService {
  // Todo: get from a remote source of question metadata
  getQuestions(): Promise<QuestionBase<any>[]> {
    let questions: QuestionBase<any>[] = [

    new QuestionID ({
        key: 'faqs',
        value: 'true'
    }),

    new TextboxQuestion({
      key: 'faqName',
      label: 'Your Name',
      value: ' ',
      required: false,
      order: 1
    }),

    new TextboxQuestion({
      key: 'faqEmailAddress',
      label: 'Your Email',
      type: 'email',
      order: 2,
      required: true
    }),

    new TextboxQuestion({
      key: 'faqQustion',
      label: 'What is your Question?',
      value: ' ',
      required: true,
      order: 1
    })

    ];

    return Promise.resolve(questions.sort((a, b) => a.order - b.order));
  }

  getFaqQuestions(): Promise<QuestionBase<any>[]> {
    return new Promise<QuestionBase<any>[]>(resolve =>
      setTimeout(resolve, 1350)) // delay 2 seconds
      .then(() => this.getQuestions());
  }
}
