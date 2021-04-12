import { makeAutoObservable } from "mobx";
import catCollectionService from "../services/catCollection/catCollectionService";
import ICatRequestDTO from "../services/catCollection/dto/catRequestDto";
import ICatResponseDTO from "../services/catCollection/dto/catResponseDto";

class CatCollectionStore {
  $catsData: Array<ICatRequestDTO> = [];
  $filterQueryValue: string = "";
  $cat: Array<ICatResponseDTO> = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getCats(searchValue?: string): Promise<void> {
    const res = await catCollectionService.getCats<ICatRequestDTO>(
      searchValue,
      this.$filterQueryValue,
    );
    this.$catsData = res;
  }

  async getCatById(id: number): Promise<void> {
    const res = await catCollectionService.getCatById<ICatResponseDTO>(id);
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

  setFilterQueryValue(value: string): void {
    this.$filterQueryValue = value;
  }

  async setSortData(value: string, name: string): Promise<void> {
    const serializeValue = value.split("-");
    const serializeName = name.split("-");

    const res = await catCollectionService.sortCatFields<string>(
      serializeValue[1],
      serializeName[1],
    );
    this.$catsData = res;
  }
}

export default CatCollectionStore;
