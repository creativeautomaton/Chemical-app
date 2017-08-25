import { QuestionBase } from './question-base';

export class QuestionID extends QuestionBase<string> {
  controlType = 'id';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
