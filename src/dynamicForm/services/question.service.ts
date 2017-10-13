import { Injectable }       from '@angular/core';
import { QuestionID } from '../models/question-id';
import { DropdownQuestion } from '../models/question-dropdown';
import { CheckboxQuestion } from '../models/question-checkbox';
import { RangeQuestion } from '../models/question-range';
import { QuestionBase }     from '../models/question-base';
import { TextboxQuestion }  from '../models/question-textbox';
import { AccordianQuestion }  from '../models/question-accordian';

@Injectable()
export class ChemicalQuestionService {
  basic: boolean = true;

  // Todo: get from a remote source of question metadata
  getQuestions(): Promise<QuestionBase<any>[]> {

    let questions: QuestionBase<any>[] = [

          new QuestionID ({
             label: 'testing nested questions',
             key: 'assessments',
             value: 'false',
             required: true,
             order: 1,
             category: 'basic',

             options: [
                 new TextboxQuestion({
                    key: 'Title test',
                    label: 'Task Title test',
                    value: ' ',
                    required: true,
                    order: 1
                 }),
                 new TextboxQuestion({
                    key: 'Title test 23232',
                    label: 'Task Title test232323',
                    value: ' ',
                    required: true,
                    order: 1
                  })
                ]
           }),
           new TextboxQuestion({
              key: 'Title test',
              label: 'Task Title test',
              value: ' ',
              required: true,
              order: 3,
              category: 'user-information'
           }),
           new TextboxQuestion({
              key: 'Title test 23232',
              label: 'Task Title test232323',
              value: ' ',
              required: true,
              order: 2,
               category: 'user-information'
            })
    ]



    // let questions: QuestionBase<any>[] = [
    //
    //    new QuestionID ({
    //       key: 'chemicals',
    //       value: 'false'
    //     }),
    //
    //   // new CheckboxQuestion({
    //   //   key: 'brave',
    //   //   label: 'Bravery Rating',
    //   //   options: [
    //   //     {key: 'solid',  value: 'Solid'},
    //   //     {key: 'great',  value: 'Great'},
    //   //     {key: 'good',   value: 'Good'},
    //   //     {key: 'unproven', value: 'Unproven'}
    //   //   ],
    //   //   order: 3
    //   // }),
    //
    //   new RangeQuestion({
    //     key: 'ph',
    //     label: 'Ph Range',
    //     options: [
    //       {
    //         label: 'PH Range',
    //         key: 'ph-1',
    //         min: '0',
    //         max: '14',
    //         step: '1'
    //       },
    //     ],
    //     order: 3
    //   }),
    //
    //   new TextboxQuestion({
    //     key: 'chemicalName',
    //     label: 'Chemical Name',
    //     value: ' ',
    //     required: true,
    //     order: 1
    //   }),
    //
    //   new TextboxQuestion({
    //     key: 'manufacturerID',
    //     label: 'Manufacturer ID',
    //     value: ' ',
    //     required: false,
    //     order: 2
    //   }),
    //
    // new TextboxQuestion({
    //   key: 'CAS',
    //   label: 'CAS',
    //   value: ' ',
    //   required: false,
    //   order: 2
    // }),
    //
    //  new TextboxQuestion({
    //    key: 'flashPoint',
    //    label: 'Flash Point',
    //    value: ' ',
    //    required: false,
    //    order: 2
    //  }),
    //
    // new TextboxQuestion({
    //   key: 'vaporPressure',
    //   label: 'Vapor Pressure',
    //   value: ' ',
    //   required: false,
    //   order: 2
    // }),
    //
    // new TextboxQuestion({
    //   key: 'evaporationRate',
    //   label: 'Evaporation Rate',
    //   value: ' ',
    //   required: false,
    //   order: 2
    // }),
    //
    // // new TextboxQuestion({
    // //   key: 'ph',
    // //   label: 'Ph',
    // //   value: ' ',
    // //   required: false,
    // //   order: 2
    // // }),
    //
    // new TextboxQuestion({
    //   key: 'gasAndVapor',
    //   label: 'Gas and Vapor',
    //   value: ' ',
    //   required: false,
    //   order: 2
    // }),
    //
    // new TextboxQuestion({
    //   key: 'mistAndParticulate',
    //   label: 'Mist/Particulate',
    //   value: ' ',
    //   required: false,
    //   order: 2
    // }),
    //
    // new TextboxQuestion({
    //   key: 'healthEffect',
    //   label: 'Health Effect',
    //   value: ' ',
    //   required: false,
    //   order: 2
    // }),
    //   // new TextboxQuestion({
    //   //   key: 'emailAddress',
    //   //   label: 'Email',
    //   //   type: 'email',
    //   //   order: 3,
    //   //   required: true
    //   // })
    // ];


    return Promise.resolve(
      // questions.sort((a, b) => a.order - b.order)
      questions.sort(function(a,b) {return (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0);} )
    );


    // array.sort((a: any, b: any) => {
    //   if (a[field] < b[field]) {
    //     return -1;
    //   } else if (a[field] > b[field]) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    // return array;
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
        key: 'title',
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
        order: 2,
        section: 'User Information'
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
        order: 2,
        section: 'Chemical Table'
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
        order: 2,
        section: 'Constituents Table'
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
        order: 2,
        section: 'Exposure Limits '
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
        order: 2,
        section: 'Working Conditions'
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
            order: 2,
            section: 'Task Table'
          }),
          new TextboxQuestion({
            key: 'metalType',
            label: 'Type of Metal Being Welded(Will Enter More at a Later Time):',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'materialThickness',
            label: 'Thickness of the material (inches):',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'weldAreaWidth',
            label: 'Width of weld area (inches):',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'weldAreaHeight',
            label: 'Length of weld area (inches):',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'pipeDiameter',
            label: 'Pipe Diameter (inches):',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'WeldPasses',
            label: 'Number of Passes:',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'weldAmperage',
            label: 'Welding Machine Amperage:',
            value: ' ',
            required: false,
            order: 2
          }),
          new TextboxQuestion({
            key: 'weldOther',
            label: 'Other:',
            value: ' ',
            required: false,
            order: 2
          }),

      // Chemical Risk Ranking
        new TextboxQuestion({
          key: 'riskChemicalName',
          label: 'Chemical Name:',
          value: ' ',
          required: false,
          order: 2,
          section: 'Chemical Risk Ranking'
        }),
        new TextboxQuestion({
          key: 'riskChemicalID',
          label: 'Chemical/Manf. ID:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'riskFlashPoint',
          label: 'Flash Point:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'riskVaporPressure',
          label: 'Vapor Pressure:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'riskEvaporationRate',
          label: 'Evaporation Rate:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'riskPH',
          label: 'pH:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'riskHealthHazard',
          label: 'Health Hazard:',
          value: ' ',
          required: false,
          order: 2
        }),

    // Constituent Risk Ranking
        new TextboxQuestion({
          key: 'constituentChemicalName',
          label: 'Chemical Name:',
          value: ' ',
          required: false,
          order: 2,
          section: 'Constituent Risk Ranking'
        }),
        new TextboxQuestion({
          key: 'constituentCAS',
          label: 'CAS#:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'constituentChemicalID',
          label: 'Chemical/Manf. ID:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'constituentFlashPoint',
          label: 'Flash Point:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'constituentVaporPressure',
          label: 'Vapor Pressure:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'constituentEvaporationRate',
          label: 'Evaporation Rate:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'constituentPH',
          label: 'pH:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'constituentGasVapor',
          label: 'Gas and Vapor:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'constituentMistParticulate',
          label: 'Mist/Particulate:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'constituentHealthHazard',
          label: 'Health Hazard:',
          value: ' ',
          required: false,
          order: 2
        }),


    // Task Risk Ranking
        new TextboxQuestion({
          key: 'taskWorkSite',
          label: 'Work Site:',
          value: ' ',
          required: false,
          order: 2,
          section: 'Task Risk Ranking'
        }),
        new TextboxQuestion({
          key: 'taskSpaceVolume',
          label: 'Space Volume:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'taskExposureFrequency',
          label: 'Frequency of Exposure:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'taskDuration',
          label: 'Duration:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'taskType',
          label: 'Task Type:',
          value: ' ',
          required: false,
          order: 2
        }),


    // Local Exhaust Ventilation
        new DropdownQuestion({
          key: 'localExhaustVentilation',
          label: 'Local Exhaust Ventilation Types ',
          options: [
            {key: 'Slot Hood Without Flange',  value: 'Slot Hood Without Flange'},
            {key: 'Slot Hood With Flange',  value: 'Slot Hood With Flange'},
            {key: 'Plain Opening Hood',   value: 'Plain Opening Hood'},
            {key: 'Plain Multiple Slot Hood',  value: 'Plain Multiple Slot Hood'},
            {key: 'Flange Multiple Slot Hood',  value: 'Flange Multiple Slot Hood'},
            {key: 'Canopy Hood',   value: 'Canopy Hood'},
            {key: 'Booth', value: 'Booth'}
          ],
          order: 3,
          section: 'Local Exhaust Ventilation'
        }),
        new TextboxQuestion({
          key: 'dilutionVentSize',
          label: 'Size:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'dilutionHoodCaptureVelocity',
          label: 'Hood Capture Velocity:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'dilutionHoodFlowRate',
          label: 'Hood Flow Rate:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'dilutionDuctVelocity',
          label: 'Duct Velocity:',
          value: ' ',
          required: false,
          order: 2
        }),


    // General Dilution
        new TextboxQuestion({
          key: 'dilutionAirChangesperHour',
          label: 'Recommended Air Changes per Hour:',
          value: ' ',
          required: false,
          order: 2,
          section: 'Dilution'
        }),


    // Protective Gloves
        new DropdownQuestion({
          key: 'protectiveGloveType',
          label: 'Chosen Protective Glove',
          options: [
            {key: 'Butyl Rubber',  value: 'Butyl Rubber'},
            {key: 'Natural Rubber',  value: 'Natural Rubber'},
            {key: 'Neoprene Rubber',   value: 'Neoprene Rubber'},
            {key: 'Nitrile Rubber',  value: 'Nitrile Rubber'},
            {key: 'Polyethylene (PE)',  value: 'Polyethylene (PE)'},
            {key: 'Polyvinylalcohol (PVAL)',   value: 'Polyvinylalcohol (PVAL)'},
            {key: 'Polyvinylchloride (PVC)',   value: 'Polyvinylchloride (PVC)'},
            {key: 'Viton ®',   value: 'Viton ®'},
            {key: 'Viton ®/Butyl',   value: 'Viton ®/Butyl'},
            {key: 'Barrier ® (PE/PA/PE',   value: 'Barrier ® (PE/PA/PE'},
            {key: 'Silver Shield/4H', value: 'Silver Shield/4H'}
          ],
          order: 3,
          section: 'Protective Gloves'
        }),
        new TextboxQuestion({
          key: 'protectiveGloveCAS',
          label: 'CAS#:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'protectiveGloveConstituent',
          label: 'Constituent:',
          value: ' ',
          required: false,
          order: 2
        }),


    // Protective Clothing
        new DropdownQuestion({
          key: 'protectiveClothingType',
          label: 'Chosen protective Clothing',
          options: [
            {key: 'Trellchem®HPS',  value: 'Trellchem®HPS'},
            {key: 'Trellchem®VPS',  value: 'Trellchem®VPS'},
            {key: 'Tychem® QC',   value: 'Tychem® QC'},
            {key: 'Tychem® SL (Saranex®)',  value: 'Tychem® SL (Saranex®)'},
            {key: 'Tychem® TF',  value: 'Tychem® TF'},
            {key: 'Tychem® TP',   value: 'Tychem® TP'},
            {key: 'Tychem® C3',   value: 'Tychem® C3'},
            {key: 'Tychem® RC',   value: 'Tychem® RC'},
            {key: 'Tychem® TR',   value: 'Tychem® TR'},
            {key: 'Tychem® RF',   value: 'Tychem® RF'},
            {key: 'Tychem® CPF3', value: 'Tychem® CPF3'},
            {key: 'Tychem® F',   value: 'Tychem® F'},
            {key: 'Tychem® BR/LV',   value: 'Tychem® BR/LV'},
            {key: 'Tychem® Responder',   value: 'Tychem® Responder'},
            {key: 'Tychem® TK',   value: 'Tychem® TK'},
            {key: 'Tychem® TF',   value: 'Tychem® TF'}
          ],
          order: 3,
          section: 'Protective Clothing'
        }),
        new TextboxQuestion({
          key: 'protectiveClothingCAS',
          label: 'CAS#:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'protectiveClothingConstituent',
          label: 'Constituent:',
          value: ' ',
          required: false,
          order: 2
        }),



    // Respiratory Protection
        new DropdownQuestion({
          key: 'RespiratorType',
          label: 'Chosen Respirator Type',
          options: [
            {key: 'Air Purifying Respirator',  value: 'Air Purifying Respirator'},
            {key: 'Powered Air Purifying Respirator',  value: 'Powered Air Purifying Respirator	'},
            {key: 'Supplied Air',   value: 'Supplied Air'}
          ],
          order: 3,
          section: 'Respirator Protection'
        }),
        new DropdownQuestion({
          key: 'Respirator',
          label: 'Chosen Respirator',
          options: [
            {key: 'Quarter Dust Mask',  value: 'Quarter Dust Mask'},
            {key: 'Half Face',  value: 'Half Face'},
            {key: 'Full Face',   value: 'Full Face'},
            {key: 'Helmet/Hood',  value: 'Helmet/Hood'},
            {key: 'Half Face Continuous Flow/Pressure Demand',  value: 'Half Face Continuous Flow/Pressure Demand'},
            {key: 'Full Face Continuous Flow/Pressure Demand',   value: 'Full Face Continuous Flow/Pressure Demand'},
            {key: 'Helmet / Hood Continuous Flow',   value: 'Helmet / Hood Continuous Flow'},
            {key: 'SCBA',   value: 'SCBA'}
          ],
          order: 3
        }),
        new TextboxQuestion({
          key: 'RespiratorCAS',
          label: 'CAS#:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'RespiratorConstituent',
          label: 'Constituent:',
          value: ' ',
          required: false,
          order: 2
        }),


   // Direct Reading Exposure Monitoring
         new TextboxQuestion({
           key: 'DREMCAS',
           label: 'CAS #:',
           value: ' ',
           required: false,
           order: 2,
           section: 'Direct Reading Exposure Monitoring'
         }),
         new TextboxQuestion({
           key: 'DREMConstituent',
           label: 'Constituent:',
           value: ' ',
           required: false,
           order: 2
         }),
         new TextboxQuestion({
           key: 'DREMIonizationPotential',
           label: 'Ionization Potential:',
           value: ' ',
           required: false,
           order: 2
         }),
         new TextboxQuestion({
           key: 'DREM_PIDCF',
           label: 'PID CF:',
           value: ' ',
           required: false,
           order: 2
         }),
         new TextboxQuestion({
           key: 'DREM_LFL',
           label: 'LFL:',
           value: ' ',
           required: false,
           order: 2
         }),
         new TextboxQuestion({
           key: 'DREM_UFL',
           label: 'UFL:',
           value: ' ',
           required: false,
           order: 2
         }),
         new TextboxQuestion({
           key: 'DREM_LEL_CF',
           label: 'LEL CF:',
           value: ' ',
           required: false,
           order: 2
         }),
         new TextboxQuestion({
           key: 'DREM_ColorimetricTubeChip',
           label: 'Colorimetric Tube/Chip:',
           value: ' ',
           required: false,
           order: 2
         }),
         new TextboxQuestion({
           key: 'DREM_Other',
           label: 'Other:',
           value: ' ',
           required: false,
           order: 2
         }),


    // Exposure Data
        new TextboxQuestion({
          key: 'exposureDataCAS',
          label: 'CAS #:',
          value: ' ',
          required: false,
          order: 2,
          section: 'Exposure Data'
        }),
        new TextboxQuestion({
          key: 'exposureDataConstituent',
          label: 'Constituent:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'exposureDataModeledExposureResults',
          label: 'Modeled Exposure Results:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'exposureDataPredictiveExposureResults',
          label: 'Predictive Exposure Results:',
          value: ' ',
          required: false,
          order: 2
        }),
        new TextboxQuestion({
          key: 'exposureDataObjectiveDataExposureResults',
          label: 'Objective Data Exposure Results:',
          value: ' ',
          required: false,
          order: 2
        }),


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
