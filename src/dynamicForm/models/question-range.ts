import { QuestionBase } from './question-base';

export class RangeQuestion extends QuestionBase<string> {
  controlType = 'range';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
