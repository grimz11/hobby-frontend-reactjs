import http from "../httpService";
import AppConsts from "../../utils/appconst";
import ICatRequestDTO from "./dto/catRequestDto";

class CatCollectionService {
  async getCats<T>(
    searchValue?: string,
    filterQueryValue?: string,
  ): Promise<Array<T>> {
    if (searchValue) {
      const res = await http.get(
        `${AppConsts.appBaseUrl}/cats?${filterQueryValue}=${searchValue}`,
      );
      return res.data;
    }
    const res = await http.get(`${AppConsts.appBaseUrl}/cats`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }

  async getCatById<T>(id: number): Promise<Array<T>> {
    const res = await http.get(`${AppConsts.appBaseUrl}/cats/${id}`);
    return res.data;
  }

  async createCat<T>(payload: T): Promise<Array<T>> {
    const res = await http.post(`${AppConsts.appBaseUrl}/cats`, payload);
    return res.data;
  }

  async deleteCat(id: number): Promise<void> {
    await http.delete(`${AppConsts.appBaseUrl}/cats/${id}`);
  }

  async updateCat<T>(id: number, payload: T): Promise<Array<T>> {
    const res = await http.patch(`${AppConsts.appBaseUrl}/cats/${id}`, payload);
    return res.data;
  }

  async sortCatFields<T>(value: T, name: T): Promise<Array<ICatRequestDTO>> {
    const res = await http.post(
      `${AppConsts.appBaseUrl}/cats/sort?${name}::${value}`,
    );
    return res.data;
  }
}

export default new CatCollectionService();
