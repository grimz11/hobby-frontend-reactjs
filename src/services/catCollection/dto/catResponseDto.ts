export default interface ICatResponseDTO {
  id?: number;
  age: number;
  name: string;
  description: string;
  photo: any;
  status: CatStatus;
  breed: string;
}

export enum CatStatus {
  PUBLISHED = "PUBLISHED",
  UNPUBLISHED = "UNPUBLISHED",
}
