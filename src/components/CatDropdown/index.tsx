import { Col, Menu, Row } from "antd";
import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import CatCollectionStore from "../../stores/catCollectionStore";
import Stores from "../../stores/storeIdentifier";

export interface ILocalProps {
  catCollectionStore?: CatCollectionStore;
  type: string;
}

const CatDropdown = inject(Stores.CatCollectionStore)(
  observer(({ catCollectionStore, type }: ILocalProps) => {
    const filters = ["name", "breed", "description", "age"];
    const sortNames = ["name", "breed", "age", "created_at"];
    const sortValue = ["ASC", "DESC"];
    const [sortName, setSortName] = useState("");

    const handleFilter = (val: any) => {
      const serializeValue = val.key.split("-");
      catCollectionStore?.setFilterQueryValue(serializeValue[1]);
    };

    return (
      <>
        <Menu onClick={handleFilter}>
          {type === "filter" &&
            filters.map((item) => {
              return <Menu.Item key={`filter-${item}`}>{item}</Menu.Item>;
            })}
        </Menu>
        <Row>
          <Col span={12} style={{ width: "100px" }}>
            <Menu
              onClick={(val: any) => {
                setSortName(val.key);
              }}
            >
              {type === "sort" &&
                sortNames.map((item) => {
                  return <Menu.Item key={`sortName-${item}`}>{item}</Menu.Item>;
                })}
            </Menu>
          </Col>
          <Col span={12}>
            <Menu
              onClick={(val: any) => {
                catCollectionStore?.setSortData(val.key, sortName);
              }}
              style={{ width: "100px" }}
            >
              {type === "sort" &&
                sortValue.map((item) => {
                  return (
                    <Menu.Item
                      disabled={!Boolean(sortName) ? true : false}
                      key={`sortVal-${item}`}
                    >
                      {item}
                    </Menu.Item>
                  );
                })}
            </Menu>
          </Col>
        </Row>
      </>
    );
  }),
);

export default CatDropdown;
