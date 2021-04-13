import "./index.less";
import { Card, Col, Row } from "antd";
import ICatDTO from "../../../../services/catCollection/dto/catRequestDto";
import { Link, useHistory, useLocation } from "react-router-dom";

import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeIdentifier";
import CatCollectionStore from "../../../../stores/catCollectionStore";
import { PlusCircleOutlined } from "@ant-design/icons";
import AppConsts from "../../../../utils/appconst";

const { Meta } = Card;
interface ILocalProps {
  catCollectionStore?: CatCollectionStore;
  data: any;
}

const CatLists = inject(Stores.CatCollectionStore)(
  observer(({ data }: ILocalProps) => {
    const history = useHistory();
    const location = useLocation();
    const matchedLocation = location.pathname.includes("/cat");

    return (
      <Row
        gutter={[
          { xs: 0, sm: 0, md: 16 },
          { xs: 24, sm: 12, md: 16 },
        ]}
        style={{ marginTop: "40px" }}
      >
        <Col xs={24} md={12} lg={8} xl={6}>
          <Link to={`cat/create`}>
            <Card
              title="Add Cat"
              className="add-cat"
              hoverable
              size="default"
              cover={<PlusCircleOutlined style={{ fontSize: "120px" }} />}
            />
          </Link>
        </Col>
        {data?.map((item: ICatDTO) => {
          return (
            <Col
              sm={24}
              md={12}
              lg={8}
              xl={6}
              key={`cat-${item.id}`}
              className="cat-card-inHome"
            >
              {matchedLocation && (
                <span onClick={() => history.push("/home")} className="back">
                  Back
                </span>
              )}
              <Link to={`cat/${item.id}`}>
                <Card
                  className="card"
                  hoverable
                  size="default"
                  cover={
                    <img
                      alt="example"
                      height="230"
                      width="200"
                      src={`${AppConsts.appBaseUrl}/${item.photo}`}
                      style={{ objectFit: "cover" }}
                    />
                  }
                >
                  <Meta title={item.name} />
                  <Meta description={item.breed} />
                  <Meta description={item.age} />
                  <Meta
                    description={
                      !matchedLocation && item.description.length > 30
                        ? `"${item.description.slice(0, 30)}" - Read more`
                        : `"${item.description}"`
                    }
                  />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    );
  }),
);

export default CatLists;
