import CatCollectionStore from "./catCollectionStore";

export default function initializeStores() {
  return {
    catCollectionStore: new CatCollectionStore(),
  };
}
