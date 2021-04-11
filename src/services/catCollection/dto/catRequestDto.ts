export default interface CatRequestDTO {
  id?: number;
  age: number;
  name: string;
  description: string;
  photo: string;
  status: CatStatus;
  breed: string;
}

export enum CatStatus {
  PUBLISHED = "PUBLISHED",
  UNPUBLISHED = "UNPUBLISHED",
}
