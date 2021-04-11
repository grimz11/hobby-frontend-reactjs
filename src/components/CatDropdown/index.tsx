import { Menu } from "antd";
import { inject, observer } from "mobx-react";
import React from "react";
import CatCollectionStore from "../../stores/catCollectionStore";
import Stores from "../../stores/storeIdentifier";

export interface ILocalProps {
  catCollectionStore?: CatCollectionStore;
}

@inject(Stores.CatCollectionStore)
@observer
class CatDropdown extends React.Component<ILocalProps, any> {
  readonly filters = ["name", "breed", "description", "age"];

  handleClick = (val: any) => {
    this.props.catCollectionStore?.setFilterQueryValue(val.key);
  };
  render() {
    return (
      <Menu onClick={this.handleClick}>
        {this.filters.map((item) => {
          return <Menu.Item key={item}>{item}</Menu.Item>;
        })}
      </Menu>
    );
  }
}
export default CatDropdown;
