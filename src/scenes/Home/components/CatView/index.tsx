import { inject, observer } from "mobx-react";
import React from "react";
import CatCard from "../CatLists";
import CatCollectionStore from "../../../../stores/catCollectionStore";
import Stores from "../../../../stores/storeIdentifier";
import CatDTO from "../../../../services/catCollection/dto/catResponseDto";
import { toJS } from "mobx";
import CatDetail from "../../../../components/CatDetail";

interface ILocalProps {
  catCollectionStore: CatCollectionStore;
  match: any;
}
interface ILocalState {
  catsData: Array<CatDTO>;
}

@inject(Stores.CatCollectionStore)
@observer
class CatView extends React.Component<ILocalProps, ILocalState> {
  state = {
    catsData: [],
  };

  async componentDidMount() {
    console.log("CatView", this.props.match.params.id);
    const { id } = this.props.match.params;
    if (id !== "create") {
      await this.props.catCollectionStore.getCatById(parseInt(id));
      this.setState({ catsData: toJS(this.props.catCollectionStore.$cat) });
    }
  }

  render() {
    const { catsData } = this.state;
    const { id } = this.props.match.params;
    return (
      <>
        {Object.keys(catsData).length > 0 && (
          <CatDetail data={catsData} id={id} />
        )}
        {id === "create" && <CatDetail data={null} id={id} />}
      </>
    );
  }
}

export default CatView;
