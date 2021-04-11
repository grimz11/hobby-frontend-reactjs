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
import { confirm, success } from "../Modal";
import AppConsts from "../../utils/appconst";
import ImageUploader from "react-images-upload";
import axios from "axios";
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
    const [imageChanged, setImageChanged] = React.useState(false);

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

    console.log("values", data);
    const handleSaveClick = () => {
      const formData = new FormData();
      formData.append("files", image);

      if (createState) {
        form.validateFields().then(async (values) => {
          console.log("photo", values.photo);
          console.log("form", image);
          console.log("formData", formData);
          const payload: CatResponseDTO = {
            age: values.age,
            name: values.name,
            description: values.description,
            breed: values.breed,
            photo: formData,
            status: CatStatus.PUBLISHED,
          };
          await catCollectionStore?.createCat(payload);
          setUpdateState(!updateState);
          if (catCollectionStore?.$catsData) {
            history.push("/home");
          }
        });
        return;
      } else {
        form.validateFields().then(async (values) => {
          const payload: CatResponseDTO = {
            age: values.age,
            name: values.name,
            description: values.description,
            breed: values.breed,
            photo: "",
            status: CatStatus.PUBLISHED,
          };
          await catCollectionStore?.updateCat(id, payload);
          setUpdateState(!updateState);
          if (catCollectionStore?.$cat) {
            history.push("/home");
          }
        });
        return;
      }
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
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("photo", image);
      // formData.append("ref", "user");
      // formData.append("refId", utils.getCookie("id"));
      // formData.append("field", "avatar");
      // formData.append("source", "users-permissions");
    };

    const onChangeAvatar = async (file: any, localAvatar: any) => {
      document.querySelector(".avatar")?.setAttribute("src", localAvatar[0]);
      setImage(file[0].files);
      console.log("file", file[0].files);
      setImageChanged(true);
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
                <div className="cat-left-input">
                  <Form.Item name="name" rules={[{ required: true }]}>
                    <Input
                      ref={(el: any) => {
                        inputRef.current = el;
                        setInputEl(!!el);
                      }}
                      className="title"
                      name={data?.name}
                      disabled={(!updateState && !createState) ?? false}
                    />
                  </Form.Item>
                  <Form.Item name="breed" rules={[{ required: true }]}>
                    <Input
                      name={data?.breed}
                      disabled={(!updateState && !createState) ?? false}
                    />
                  </Form.Item>
                  <Form.Item
                    name="age"
                    rules={[{ required: true, type: "number" }]}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      name={data?.age}
                      disabled={(!updateState && !createState) ?? false}
                    />
                  </Form.Item>
                </div>
                <div className="cat-img">
                  <Form.Item name="photo" rules={[{ required: true }]}>
                    {data?.photo ? (
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
                          onChange={onChangeAvatar}
                          label="Max file size: 5mb, accepted: jpg | gif | png "
                          singleImage={true}
                          withPreview
                        />
                      </div>
                    )}
                  </Form.Item>
                </div>
              </div>

              <Form.Item name="description" rules={[{ required: true }]}>
                <Input.TextArea
                  name={data?.description}
                  autoSize
                  disabled={(!updateState && !createState) ?? false}
                />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }),
);

export default CatDetail;
