// React
import { useEffect, useState } from "react";
// AntDesign
import { Modal, Button, Form, Input, Select } from "antd";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { handleEditUserModalVisibility } from "../../store/Modals.store";
import { editUser } from "../../store/Users.store";

const { Option } = Select;

export default function EditUserModal() {
  const dispath = useDispatch();
  const isModalVisible = useSelector(
    (state) => state.modals.isEditUserModalVisible
  );
  const selectedUser = useSelector((state) => state.users.selectedUser[0]);
  const allUnits = useSelector((state) => state.units.allUnits);

  const [newUserName, setNewUserName] = useState(
    useSelector((state) => selectedUser.name)
  );
  const [newUserEmail, setNewUserEmail] = useState(
    useSelector((state) => selectedUser.email)
  );
  const [newUnityId, setNewUnityId] = useState(
    useSelector((state) => selectedUser.unityId)
  );
  const selectedUserId = useSelector((state) => selectedUser.id);

  const [form] = Form.useForm();

	useEffect(() => {
		setNewUserName(selectedUser.name)
		setNewUserEmail(selectedUser.email)
		setNewUnityId(selectedUser.unitId)
	}, [selectedUser])

  const handleOk = () => {
    dispath(editUser([selectedUserId, newUserName, newUserEmail, newUnityId]));
    dispath(handleEditUserModalVisibility());
  };

  const handleCancel = () => {
    dispath(handleEditUserModalVisibility());
  }; 

	const handleChangeSelectedUnity = (unitId) => {
    setNewUnityId(unitId);
  }; 

  return (
    <>
      <Modal
        title="Editar usuário"
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
