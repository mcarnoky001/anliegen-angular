export class Task {
  pk;
  name;
  user;
  description;
  contractId;
  status;
  timeOfInit;
  noSubtasks;
  blocker;
  note;

  constructor(
    pk,
    name,
    user,
    description,
    contractId,
    status,
    timeOfInit,
    noSubtasks,
    blocker,
    note,
  ) {
    this.pk = pk;
    this.name = name;
    this.user = user;
    this.description = description;
    this.contractId = contractId;
    this.status = status;
    timeOfInit = timeOfInit;
    noSubtasks = noSubtasks;
    blocker = blocker;
    note = note;
  }


}
