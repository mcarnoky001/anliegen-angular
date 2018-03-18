export class Task {

  name;
  description;
  contractId;
  status;

  constructor(
    name,
    description,
    contractId,
    status
  ) {
    this.name = name;
    this.description = description;
    this.contractId = contractId;
    this.status = status;
  }


}
