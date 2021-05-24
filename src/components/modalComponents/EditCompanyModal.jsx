// React
import { useState } from "react";
// AntDesign
import { Modal, Button, Form, Input } from "antd";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { handleEditCompanyModalVisibility } from "../../store/Modals.store";
import { editCompany } from "../../store/Company.store";
import { handleShowAlert } from "../../store/SystemInfos.store";

export default function EditCompanyModal() {
  const dispath = useDispatch();
  const isModalVisible = useSelector(
    (state) => state.modals.isEditCompanyModalVisible
  );

  const [newCompanyName, setNewCompanyName] = useState(
    useSelector((state) => state.company.loggedCompany.name)
  );
  const [form] = Form.useForm();

  const handleOk = () => {
		dispath(editCompany(newCompanyName))
    dispath(handleEditCompanyModalVisibility());
		dispath(handleShowAlert(true))
		setTimeout(() => {
			dispath(handleShowAlert(false))
		}, 2000);
  };

  const handleCancel = () => {
    dispath(handleEditCompanyModalVisibility());
  };

  return (
    <>
      <Modal
        title="Editar empresa"
        visible={isModalVisible}
				onOk={handleOk} 
				onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button type="primary" onClick={handleOk}>
            Salvar
          </Button>
        ]}
      >
        <Form.Item form={form} layout="vertical">
          <Form.Item label="Nome da empresa" required>
            <Input
              placeholder="input placeholder"
              value={newCompanyName}
              onChange={(e) => setNewCompanyName(e.target.value)}
            />
          </Form.Item>
        </Form.Item>
      </Modal>
    </>
  );
}
