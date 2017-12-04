import { QuestionBase } from './question-base';

export class DateQuestion extends QuestionBase<string> {
  controlType = 'date';
  type: string;
  category: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.category = options['category'] || '';
  }
}
