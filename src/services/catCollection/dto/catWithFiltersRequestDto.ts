import { ICatStatus } from "./catRequestDto";

export default interface ICatWithFiltersRequestDTO {
  status: ICatStatus;
  name: string;
  age: number;
  breed: string;
  description: string;
}
