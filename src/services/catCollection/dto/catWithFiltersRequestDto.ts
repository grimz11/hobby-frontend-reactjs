import { CatStatus } from "./catRequestDto";

export default interface CatWithFiltersRequestDTO {
  status: CatStatus;
  name: string;
  age: number;
  breed: string;
  description: string;
}
