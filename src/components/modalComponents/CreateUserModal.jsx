// React
import { useState } from "react";
// AntDesign
import { Modal, Button, Form, Input, Select } from "antd";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { handleCreateUserModalVisibility } from "../../store/Modals.store";
import { createUser } from "../../store/Users.store";
import { handleShowAlert } from "../../store/SystemInfos.store";

const { Option } = Select;

export default function CreateUserModal() {
  const dispath = useDispatch();
  const isModalVisible = useSelector(
    (state) => state.modals.isCreateUserModalVisible
  );

	const allUnits = useSelector((state) => state.units.allUnits);

	const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUnityId, setNewUnityId] = useState(1);
  const userId = Math.random();

  const [form] = Form.useForm();

  const handleOk = () => {
    dispath(createUser([userId, newUserName, newUserEmail, newUnityId]));
    dispath(handleCreateUserModalVisibility());
		dispath(handleShowAlert(true))
		setTimeout(() => {
			dispath(handleShowAlert(false))
		}, 2000);
  };

  const handleCancel = () => {
    dispath(handleCreateUserModalVisibility());
  }; 

	const handleChangeSelectedUnity = (unitId) => {
    setNewUnityId(unitId);
  }; 

  return (
    <>
      <Modal
        title="Criar novo usuário"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
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
          <Form.Item label="Nome" required>
            <Input
              placeholder="Nome do colaborador"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Email do Colaborador" required>
            <Input
              placeholder="email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Unidade do colaborador" required>
            <Select
              value={newUnityId}
              onChange={handleChangeSelectedUnity}
            >
              {allUnits.length > 0 &&
                allUnits.map((unity) => (
                  <Option key={unity.id} value={unity.id}>
                    {unity.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Form.Item>
      </Modal>
    </>
  );
}
