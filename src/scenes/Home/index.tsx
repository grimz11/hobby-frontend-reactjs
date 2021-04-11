import "./index.less";
import { Alert, Dropdown, Input } from "antd";
import { inject, observer } from "mobx-react";
import * as React from "react";
import CatLists from "./components/CatLists";
import CatCollectionStore from "../../stores/catCollectionStore";
import Stores from "../../stores/storeIdentifier";
import { SortAscendingOutlined } from "@ant-design/icons";
import CatDTO from "../../services/catCollection/dto/catRequestDto";
import CatMenu from "../../components/CatDropdown";
const { Search } = Input;
interface ILocalProps {
  catCollectionStore: CatCollectionStore;
}
interface ILocalState {
  catsData: Array<CatDTO>;
}
@inject(Stores.CatCollectionStore)
@observer
class Home extends React.Component<ILocalProps, ILocalState> {
  state = {
    catsData: [],
  };

  async componentDidMount() {
    await this.props.catCollectionStore.getCats();
    this.setState({ catsData: this.props.catCollectionStore.$catsData });
  }

  handleSearch = async (value: string) => {
    if (Boolean(value)) {
      await this.props.catCollectionStore.getCats(value);
      this.setState({ catsData: this.props.catCollectionStore.$catsData });
    }
  };

  render() {
    const { catsData } = this.state;
    const { $filterQueryValue } = this.props.catCollectionStore;
    return (
      <div className="site-layout-content">
        <div className="search-cat">
          <Dropdown overlay={<CatMenu />} placement="bottomRight" arrow>
            <Search
              placeholder={"Search"}
              onSearch={this.handleSearch}
              type={$filterQueryValue === "age" ? "number" : "text"}
            />
          </Dropdown>
          <SortAscendingOutlined />
        </div>
        <CatLists data={catsData} />
      </div>
    );
  }
}

export default Home;
