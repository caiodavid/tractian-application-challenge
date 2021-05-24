// React
import { useEffect, useState } from "react";
// AntDesign
import { Modal, Button, Form, Input } from "antd";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { handleEditUnityModalVisibility } from "../../store/Modals.store";
import { editUnit } from "../../store/Units.store";
import { handleShowAlert } from "../../store/SystemInfos.store";

export default function EditUnitModal() {
  const dispath = useDispatch();
  const isModalVisible = useSelector(
    (state) => state.modals.isEditUnityModalVisible
  );
  const selectedUnit = useSelector((state) => state.units.selectedUnity);
  const [newUnitName, setNewUnitName] = useState(selectedUnit.name);

  const [form] = Form.useForm();

  useEffect(() => {
    setNewUnitName(selectedUnit.name);
  }, [selectedUnit]);

  const handleOk = () => {
    dispath(editUnit([selectedUnit.id, newUnitName]));
    dispath(handleEditUnityModalVisibility());
		dispath(handleShowAlert(true))
		setTimeout(() => {
			dispath(handleShowAlert(false))
		}, 2000);
  };

  const handleCancel = () => {
    dispath(handleEditUnityModalVisibility());
  };

  return (
    <>
      <Modal
        title="Editar unidade"
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