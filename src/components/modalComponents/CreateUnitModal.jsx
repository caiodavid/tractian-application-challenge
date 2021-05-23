// React
import { useEffect, useState } from "react";
// AntDesign
import { Modal, Button, Form, Input } from "antd";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { handleCreateUnityModalVisibility } from "../../store/Modals.store";
import { createUnit } from "../../store/Units.store";

export default function CreateUnitModal() {
  const dispath = useDispatch();
  const isModalVisible = useSelector(
    (state) => state.modals.isCreateUnityModalVisible
  );
  const [newUnitName, setNewUnitName] = useState("");
	const [unitId, setUinitId] = useState(Math.random())

  const [form] = Form.useForm();

	console.log(newUnitName);

  const handleOk = () => {
    dispath(createUnit([unitId, newUnitName]));
    dispath(handleCreateUnityModalVisibility());
  };

  const handleCancel = () => {
    dispath(handleCreateUnityModalVisibility());
  };

  return (
    <>
      <Modal
        title="Criar unidade"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Adicionar
          </Button>,
        ]}
      >
        <Form.Item form={form} layout="vertical">
          <Form.Item label="Nome" required>
            <Input
              placeholder="Nome da unidade"
              value={newUnitName}
              onChange={(e) => setNewUnitName(e.target.value)}
            />
          </Form.Item>
        </Form.Item>
      </Modal>
    </>
  );
}