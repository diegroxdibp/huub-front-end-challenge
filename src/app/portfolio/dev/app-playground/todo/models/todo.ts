export default class Todo {

  task: string;
  priority: string;
  createdAt: Date;
  id: number;
  haveDescription: boolean;
  description: string;
  completionStatus: boolean;

  constructor(
    task: string, priority: string, id: number = 1, haveDescription: boolean,
    description: string = '', createdAt: Date = new Date(), completionStatus: boolean = false
  ) {
    this.task = task;
    this.priority = priority;
    this.createdAt = createdAt;
    this.haveDescription = haveDescription;
    this.description = description;
    this.id = id;
    this.completionStatus = completionStatus;
  }

  toggleCompletionStatus(): void {
    this.completionStatus = !this.completionStatus;
  }
}
