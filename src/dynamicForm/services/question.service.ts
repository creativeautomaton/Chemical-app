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

   // User Information
      new TextboxQuestion({
        key: 'company',
        label: 'Company',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'department',
        label: 'Department',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'section',
        label: 'Section Name',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'building',
        label: 'Building Name',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'date',
        label: 'Date',
        value: ' ',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'location',
        label: 'Location',
        value: ' ',
        required: false,
        order: 2
      }),
    // Chemical Table
      new TextboxQuestion({
        key: 'chemicalName',
        label: 'Chemical Name (SDS):',
        value: ' ',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'chemicalManufacturer',
        label: 'Chemical Manufacturer:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'category',
        label: 'Product Category:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'boiling',
        label: 'Boiling Point (°F):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'freezing',
        label: 'Freezing Point (°F):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'solubility',
        label: 'Solubility (%):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'evaporationRate',
        label: 'Evaporation Rate:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'upperFlammability',
        label: 'Upper Flammability (%):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'solubility',
        label: 'Solubility (%):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'vaporDensity',
        label: 'Vapor Density:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'healthHazard',
        label: 'Health Hazard:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'chemicalManufacturerID',
        label: 'Chemical/Manf. ID:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'molWeight',
        label: 'Molecular Weight (g/mol):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'flashPoint',
        label: 'Flash Point (°F):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'meltingPoint',
        label: 'Melting Point (°F):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'vaporPressure',
        label: 'Vapor Pressure (mm/Hg):',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'ph',
        label: 'pH:',
        value: ' ',
        required: false,
        order: 2
      }),

      new TextboxQuestion({
        key: 'lowerFlammability',
        label: 'Lower Flammability (%):',
        value: ' ',
        required: false,
        order: 2
      }),

// Constituents Table
      new TextboxQuestion({
        key: 'cas',
        label: 'CAS#:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'constituentName',
        label: 'Constituent Name:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'physicalState',
        label: 'Physical State:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'percentOfChemical',
        label: '% of chemical:',
        value: ' ',
        required: false,
        order: 2
      }),
      // Exposure Limits - Within the Constituents Table
      //ACGIH
      new TextboxQuestion({
        key: 'ACGIH_TLV',
        label: 'ACGIH TLV:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'ACGIH_STEL',
        label: 'ACGIH STEL:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'ACGIH_CL',
        label: 'ACGIH CL:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'BEI',
        label: 'BEI:',
        value: ' ',
        required: false,
        order: 2
      }),
      // OSHA
      new TextboxQuestion({
        key: 'OSHA_PEL',
        label: 'OSHA PEL:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'OSHA_STEL',
        label: 'OSHA STEL:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'OSHA_CL',
        label: 'OSHA CL:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'OSHA_EL',
        label: 'OSHA EL:',
        value: ' ',
        required: false,
        order: 2
      }),
      //NIOSH
      new TextboxQuestion({
        key: 'NIOSH_REL',
        label: 'NIOSH REL:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'NIOSH_IDLH',
        label: 'NIOSH IDLH:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'OdorThreshold',
        label: 'Odor Threshold:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'OSHA_Standard',
        label: 'OSHA Standard:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'exposureLimitsHealthHazard',
        label: 'Health Hazard:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'OSHA_AirSamplingMethod',
        label: 'OSHA Air Sampling Method:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'NIOSH_AirSamplingMethod',
        label: 'NIOSH Air Sampling Method:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'bulkSamplingMethod',
        label: 'Bulk Sampling Method:',
        value: ' ',
        required: false,
        order: 2
      }),

  // Work Conditions Table
      new TextboxQuestion({
        key: 'WorkSite',
        label: 'Work Site:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'No_of_Workers',
        label: 'No. of Workers:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'spaceVolume',
        label: 'Space Volume:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'roomVentIn',
        label: 'Room Ventilation In:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'roomVentOut',
        label: 'Room Ventilation Out:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'No_of_Workers',
        label: 'No. of Workers:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'temperature',
        label: 'Temperature:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'humidity',
        label: 'Humidity:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'windDirection',
        label: 'Wind Direction:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'windSpeed',
        label: 'Wind Speed:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'atmoPressure',
        label: 'Atm. Pressure:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'workPosition',
        label: 'Work Position:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'employeePosition',
        label: 'Employee Position:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'DFBZ',
        label: 'Distance from Breathing Zone:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'exposureFrequency',
        label: 'Frequency of Exposure:',
        value: ' ',
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'exposurePerDay',
        label: 'Duration of Exposure Per Day:',
        value: ' ',
        required: false,
        order: 2
      }),

  // Task Table
      //Task
        // Material Fabrication
          new TextboxQuestion({
            key: 'generationRate',
            label: 'Generation Rate (rods/hour) :',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'metalType',
            label: 'Type of Metal Being Welded(Will Enter More at a Later Time) <Enter>:',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'exposurePerDay',
            label: 'Duration of Exposure Per Day:',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'exposurePerDay',
            label: 'Duration of Exposure Per Day:',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'exposurePerDay',
            label: 'Duration of Exposure Per Day:',
            value: ' ',
            required: false,
            order: 2
          }),


      // new CheckboxQuestion({
      //   key: 'peopleEffected',
      //   label: 'Who are the people affected by this task? ',
      //   options: [
      //     {key: 'operator',  value: 'Operator'},
      //     {key: 'employees',  value: 'Employees'},
      //     {key: 'visitors',   value: 'Visitors'},
      //     {key: 'expectant-mothers',  value: 'New and expectant mothers'},
      //     {key: 'disabled',  value: 'Disabled'},
      //     {key: 'visitors',   value: 'Visitors'},
      //     {key: 'contractors', value: 'Contractors'}
      //   ],
      //   order: 3
      // }),
      //
      // new TextboxQuestion({
      //   key: 'HazardousSubstances',
      //   label: 'What hazardous substances are being used in this task?',
      //   value: ' ',
      //   required: false,
      //   order: 2
      // })

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
