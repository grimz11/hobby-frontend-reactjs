import "./index.less";

import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Image,
} from "antd";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { inject, observer } from "mobx-react";
import Stores from "../../stores/storeIdentifier";
import CatResponseDTO, {
  CatStatus,
} from "../../services/catCollection/dto/catResponseDto";
import CatCollectionStore from "../../stores/catCollectionStore";
import { useHistory } from "react-router-dom";
import AppConsts from "../../utils/appconst";
import ImageUploader from "react-images-upload";
interface ILocalProps {
  catCollectionStore?: CatCollectionStore;
  data: any;
  id: any;
}

const CatDetail = inject(Stores.CatCollectionStore)(
  observer(({ data, id, catCollectionStore }: ILocalProps) => {
    const [form] = Form.useForm();
    const history = useHistory();

    const [updateState, setUpdateState] = useState(false);
    const [inputEl, setInputEl] = useState(false);
    const [image, setImage] = React.useState("");

    const createState = data === null && id === "create";
    let inputRef: any = useRef();

    useEffect(() => {
      if (!inputEl) {
        inputRef?.current?.focus();
        return;
      }
    }, [inputEl]);

    const handleUpdateClick = () => {
      setUpdateState(!updateState);
    };

    const handleSaveClick = async () => {
      const data = new FormData();
      form.validateFields().then(async (values: CatResponseDTO) => {
        data.append("photo", image);
        data.append("name", values.name);
        data.append("age", values.age.toString());
        data.append("breed", values.breed);
        data.append("description", values.description);
        data.append("status", CatStatus.PUBLISHED);

        if (createState) {
          await catCollectionStore?.createCat(data);
        } else {
          await catCollectionStore?.updateCat(id, data);
        }

        setUpdateState(!updateState);
        if (catCollectionStore?.$cat || catCollectionStore?.$catsData) {
          history.push("/home");
        }
      });
    };

    const handleDelete = () => {
      Modal.confirm({
        title: "Confirm",
        icon: <ExclamationCircleOutlined />,
        content: "Are you sure you want to delete the item?",
        okText: "Yes",
        onOk: async () => {
          await catCollectionStore?.deleteCat(id);
          history.push("/home");
        },
        cancelText: "No",
      });
    };

    return (
      <Row style={{ marginTop: "40px" }}>
        <Col className="cat-parent">
          <div onClick={() => history.push("/home")} className="back">
            Back
          </div>
          <Card
            hoverable
            size="default"
            actions={
              !updateState && !createState
                ? [
                    <Button
                      icon={<EditOutlined />}
                      onClick={handleUpdateClick}
                      className="primary"
                    >
                      {"Update"}
                    </Button>,
                    <Button
                      icon={<DeleteOutlined />}
                      onClick={handleDelete}
                      className="danger"
                    >
                      {"Delete"}
                    </Button>,
                  ]
                : [
                    <Button
                      icon={<SaveOutlined />}
                      onClick={handleSaveClick}
                      htmlType="submit"
                      className="primary"
                    >
                      Save
                    </Button>,
                    <Button
                      icon={<CloseCircleOutlined />}
                      onClick={
                        createState
                          ? () => form.resetFields()
                          : handleUpdateClick
                      }
                      className="danger"
                    >
                      {createState ? "Clear" : "Cancel"}
                    </Button>,
                  ]
            }
          >
            <Form
              className="cat-form-parent"
              layout="horizontal"
              name="basic"
              form={form}
              initialValues={{
                ["name"]: data?.name,
                ["description"]: data?.description,
                ["age"]: data?.age,
                ["breed"]: data?.breed,
                ["photo"]: data?.photo,
              }}
            >
              <div className="cat-form-info">
                <div className="cat-img mobile">
                  <Form.Item name="photo" rules={[{ required: true }]}>
                    {data?.photo && !updateState ? (
                      <Image
                        className="avatar"
                        src={`${AppConsts.appBaseUrl}/${data?.photo}`}
                        style={{
                          borderRadius: "100%",
                        }}
                      />
                    ) : (
                      <div>
                        <ImageUploader
                          withIcon={false}
                          maxFileSize={5242880}
                          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                          onChange={(file: any) => setImage(file[0])}
                          label="Max file size: 5mb, accepted: jpg | gif | png "
                          singleImage={true}
                          withPreview
                        />
                      </div>
                    )}
                  </Form.Item>
                </div>

                <div className="cat-left-input">
                  <Form.Item name="name" rules={[{ required: true }]}>
                    <Input
                      ref={(el: any) => {
                        inputRef.current = el;
                        setInputEl(!!el);
                      }}
                      placeholder="Name"
                      className="title"
                      name={data?.name}
                      disabled={(!updateState && !createState) ?? false}
                    />
                  </Form.Item>
                  <Form.Item name="breed" rules={[{ required: true }]}>
                    <Input
                      placeholder="Breed"
                      name={data?.breed}
                      disabled={(!updateState && !createState) ?? false}
                    />
                  </Form.Item>
                  <Form.Item
                    name="age"
                    rules={[{ required: true, type: "number" }]}
                  >
                    <InputNumber
                      placeholder="Age"
                      style={{ width: "100%" }}
                      name={data?.age}
                      disabled={(!updateState && !createState) ?? false}
                    />
                  </Form.Item>
                  <Form.Item name="description" rules={[{ required: true }]}>
                    <Input.TextArea
                      placeholder="Description"
                      name={data?.description}
                      autoSize
                      disabled={(!updateState && !createState) ?? false}
                    />
                  </Form.Item>
                </div>

                <div className="cat-img web">
                  <Form.Item name="photo" rules={[{ required: true }]}>
                    {data?.photo && !updateState ? (
                      <Image
                        className="avatar"
                        src={`${AppConsts.appBaseUrl}/${data?.photo}`}
                        style={{
                          height: 220,
                          width: 220,
                          borderRadius: "100%",
                        }}
                      />
                    ) : (
                      <div>
                        <ImageUploader
                          withIcon={false}
                          maxFileSize={5242880}
                          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                          onChange={(file: any) => setImage(file[0])}
                          label="Max file size: 5mb, accepted: jpg | gif | png "
                          singleImage={true}
                          withPreview
                        />
                      </div>
                    )}
                  </Form.Item>
                </div>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }),
);

export default CatDetail;
