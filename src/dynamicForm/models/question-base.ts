export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  category: string;
  controlType: string;
  section: string;
  header: boolean;
  headerTitle: string;
  action: string;
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      category?: string;
      controlType?: string
      section?: string;
      header?: boolean;
      headerTitle?: string;
      action?: string;
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.category = options.category === undefined ? 'basic' : options.category;
    this.controlType = options.controlType || '';
    this.section = options.section || '';
    this.header = !!options.header;
    this.headerTitle = options.headerTitle || '';
    this.action = options.action || '';
  }
}
