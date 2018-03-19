export class Task {
  pk;
  name;
  user;
  description;
  contractId;
  status;

  constructor(
    pk,
    name,
    user,
    description,
    contractId,
    status
  ) {
    this.pk = pk;
    this.name = name;
    this.user = user;
    this.description = description;
    this.contractId = contractId;
    this.status = status;
  }


}
