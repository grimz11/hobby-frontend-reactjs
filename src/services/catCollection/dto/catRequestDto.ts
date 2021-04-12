export default interface ICatRequestDTO {
  id?: number;
  age: number;
  name: string;
  description: string;
  photo: string;
  status: ICatStatus;
  breed: string;
}

export enum ICatStatus {
  PUBLISHED = "PUBLISHED",
  UNPUBLISHED = "UNPUBLISHED",
}
