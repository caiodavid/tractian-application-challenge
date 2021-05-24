// React
import { useState } from "react";
// AntDesign
import { Modal, Button, Form, Input, Row, Col, Divider, Select } from "antd";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { handleCreateAssetModalVisibility } from "../../store/Modals.store";
import { createAsset } from "../../store/Assets.store";

const { Option } = Select;

export default function CreateAssetModal() {
  const dispath = useDispatch();
  const isModalVisible = useSelector(
    (state) => state.modals.isCreateAssetModalVisible
  );
  const allUnits = useSelector((state) => state.units.allUnits);
  const allUsers = useSelector((state) => state.users.allUsers);
  const assetId = Math.random()
	const [assetName, setAssetName] = useState("");
  const [assetModel, setAssetModel] = useState("");
  const [assetStatus, setAssetStatus] = useState("");
  const [assetUnit, setAssetUnit] = useState(0);
  const [assetSensors, setAssetSensors] = useState([]);
  const [assetImage, setAssetImage] = useState("");
  const [assetResponsible, setAssetResponsible] = useState(0);
  const [assetRpm, setAssetRpm] = useState(0);
  const [assetMaxTemp, setAssetMaxTemp] = useState(0);
  const [assetPower, setAssetPower] = useState(0);

  const [form] = Form.useForm();


  const handleOk = () => {
    dispath(
      createAsset([
        assetId,
        assetName,
        assetImage,
        assetSensors,
        assetStatus,
        assetModel,
        assetUnit,
        assetResponsible,
        assetRpm,
        assetMaxTemp,
        assetPower,
      ])
    );
    dispath(handleCreateAssetModalVisibility());
  };

  const handleCancel = () => {
    dispath(handleCreateAssetModalVisibility());
  };

  const handleChangeSelectedUnity = (unitId) => {
    setAssetUnit(unitId);
  };

  const handleChangeResponsibleUser = (userId) => {
    setAssetResponsible(userId);
  };

  const handleChangeStatus = (status) => {
    setAssetStatus(status);
  };

  function handleChangeSensors(sensorName) {
    setAssetSensors(sensorName);
  }

  return (
    <>
      <Modal
        title="Createar ativo"
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Salvar
          </Button>,
        ]}
      >
        <Form.Item form={form} layout="vertical">
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Nome">
                <Input
                  placeholder="Nome da unidade"
                  value={assetName}
                  onChange={(e) => setAssetName(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Modelo">
                <Input
                  placeholder="Modelo do ativo"
                  value={assetModel}
                  onChange={(e) => setAssetModel(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Status">
                <Select
                  value={assetStatus}
                  onChange={handleChangeStatus}
                >
                  <Option value={"inAlert"}>Em alerta</Option>
                  <Option value={"inOperation"}>Em operação</Option>
                  <Option value={"inDowntime"}>Em parada</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Unidade">
                <Select value={assetUnit} onChange={handleChangeSelectedUnity}>
                  {allUnits.length > 0 &&
                    allUnits.map((unity) => (
                      <Option key={unity.id} value={unity.id}>
                        {unity.name}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Sensores">
                <Select
                  mode="tags"
                  onChange={handleChangeSensors}
                  tokenSeparators={[","]}
                  value={assetSensors}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Foto">
                <Input
                  placeholder="Foto do ativo"
                  value={assetImage}
                  onChange={(e) => setAssetImage(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Responsável">
                <Select
                  value={assetResponsible !== null && assetResponsible}
                  onChange={handleChangeResponsibleUser}
                >
                  {allUsers.length > 0 &&
                    allUsers.map((user) => (
                      <Option key={user.id} value={user.id}>
                        {user.name}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="left">Especificações</Divider>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="RPM">
                <Input
                  type="number"
                  placeholder="RPM"
                  value={assetRpm}
                  onChange={(e) => setAssetRpm(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Temperatura Max.">
                <Input
                  type="number"
                  placeholder="Temperatura máxima"
                  value={assetMaxTemp}
                  onChange={(e) => setAssetMaxTemp(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Pontência">
                <Input
                  type="number"
                  placeholder="Pontência do ativo"
                  value={assetPower}
                  onChange={(e) => setAssetPower(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      </Modal>
    </>
  );
}
