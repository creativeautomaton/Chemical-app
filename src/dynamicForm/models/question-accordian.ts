import { QuestionBase } from './question-base';

export class AccordianQuestion extends QuestionBase<string> {
  controlType = 'accordian';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
