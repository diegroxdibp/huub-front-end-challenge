export default class Todo {

  task: string;
  priority: string;
  createdAt: Date;
  id: number;
  setDescription: boolean;
  description: string;
  setDate: boolean;
  date: string;
  createdOn: Date;
  completionStatus: boolean;

  constructor(
    id: number = 1, task: string, priority: string, setDescription: boolean, description: string = '',
    setDate: boolean = false, date: string, createdAt: Date = new Date(), completionStatus: boolean = false
  ) {
    this.task = task;
    this.priority = priority;
    this.createdAt = createdAt;
    this.setDescription = setDescription;
    this.description = description;
    this.setDate = setDate;
    this.date = date;
    this.id = id;
    this.completionStatus = completionStatus;
  }

  toggleCompletionStatus(): void {
    this.completionStatus = !this.completionStatus;
  }
}
