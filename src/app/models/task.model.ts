export class Task {

  name;
  user;
  description;
  contractId;
  status;

  constructor(
    name,
    user,
    description,
    contractId,
    status
  ) {
    this.name = name;
    this.user = user;
    this.description = description;
    this.contractId = contractId;
    this.status = status;
  }


}
