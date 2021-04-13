import "./index.less";
import { Alert, Dropdown, Input } from "antd";
import { inject, observer } from "mobx-react";
import * as React from "react";
import CatLists from "./components/CatLists";
import CatCollectionStore from "../../stores/catCollectionStore";
import Stores from "../../stores/storeIdentifier";
import { SortAscendingOutlined } from "@ant-design/icons";
import ICatDTO from "../../services/catCollection/dto/catRequestDto";
import CatMenu from "../../components/CatDropdown";
import { toJS } from "mobx";
const { Search } = Input;
interface ILocalProps {
  catCollectionStore: CatCollectionStore;
}

@inject(Stores.CatCollectionStore)
@observer
class Home extends React.Component<ILocalProps, any> {
  async componentDidMount() {
    await this.props.catCollectionStore.getCats();
  }

  handleSearch = async (value: string) => {
    if (Boolean(value)) {
      await this.props.catCollectionStore.getCats(value);
    }
  };

  render() {
    const { $catsData } = this.props.catCollectionStore;
    const { $filterQueryValue } = this.props.catCollectionStore;
    console.log("$catsData", toJS($catsData));
    return (
      <div className="site-layout-content">
        <div className="search-cat">
          <Dropdown
            overlay={<CatMenu type="filter" />}
            placement="bottomRight"
            arrow
          >
            <Search
              placeholder={"Search"}
              onSearch={this.handleSearch}
              type={$filterQueryValue === "age" ? "number" : "text"}
            />
          </Dropdown>
          <Dropdown
            overlay={<CatMenu type="sort" />}
            placement="bottomRight"
            arrow
          >
            <SortAscendingOutlined />
          </Dropdown>
        </div>
        <CatLists data={$catsData} />
      </div>
    );
  }
}

export default Home;
