import { makeAutoObservable } from "mobx";
import catCollectionService from "../services/catCollection/catCollectionService";
import CatRequestDTO from "../services/catCollection/dto/catRequestDto";
import CatResponseDTO from "../services/catCollection/dto/catResponseDto";

class CatCollectionStore {
  $catsData: Array<CatRequestDTO> = [];
  $filterQueryValue: string = "";
  $cat: Array<CatResponseDTO> = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getCats(searchValue?: string): Promise<void> {
    const res = await catCollectionService.getCats<CatRequestDTO>(
      searchValue,
      this.$filterQueryValue,
    );
    this.$catsData = res;
  }

  async getCatById(id: number): Promise<void> {
    const res = await catCollectionService.getCatById<CatResponseDTO>(id);
    this.$cat = res;
  }

  async createCat(payload: any): Promise<void> {
    const res = await catCollectionService.createCat<any>(payload);
    this.$catsData = res;
  }

  async deleteCat(id: number): Promise<void> {
    await catCollectionService.deleteCat(id);
  }

  async updateCat(id: number, payload: any): Promise<void> {
    const res = await catCollectionService.updateCat<any>(id, payload);
    this.$cat = res;
  }

  setFilterQueryValue(value: string) {
    this.$filterQueryValue = value;
  }
}

export default CatCollectionStore;
