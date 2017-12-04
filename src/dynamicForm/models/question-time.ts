import { QuestionBase } from './question-base';

export class TimeQuestion extends QuestionBase<string> {
  controlType = 'time';
  type: string;
  category: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.category = options['category'] || '';
  }
}
