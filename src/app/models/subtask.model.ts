export class Subtask {
  pk;
  name;
  user;
  description;
  task;
  status;

  constructor(
    pk,
    name,
    user,
    description,
    task,
    status
  ) {
    this.pk = pk;
    this.name = name;
    this.user = user;
    this.description = description;
    this.task = task;
    this.status = status;
  }


}
