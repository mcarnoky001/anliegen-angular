export class Subtask {
  pk;
  name;
  user;
  description;
  task;
  status;
  skills;

  constructor(
    pk,
    name,
    user,
    description,
    task,
    status,
    skills
  ) {
    this.pk = pk;
    this.name = name;
    this.user = user;
    this.description = description;
    this.task = task;
    this.status = status;
    this.skills = skills;
  }


}
