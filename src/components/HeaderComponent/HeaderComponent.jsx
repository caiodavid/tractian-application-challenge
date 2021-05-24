// Redux
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUnity, clearSelectedUnity } from "../../store/Units.store";
// Ant Design
import { Layout, Select, Button } from "antd";
import {
  handleCreateUnityModalVisibility,
  handleEditUnityModalVisibility,
} from "../../store/Modals.store";
const { Header } = Layout;
const { Option } = Select;

export default function HeaderComponent() {
	const dispath = useDispatch();

	const allUnits = useSelector((state) => state.units.allUnits);
  const selectedUnity = useSelector((state) => state.units.selectedUnity);

  const handleChangeSelectedUnity = (unityId) => {
    unityId === null
      ? dispath(clearSelectedUnity())
      : dispath(setSelectedUnity(unityId));
  };

  function showUnitEditModal() {
    dispath(handleEditUnityModalVisibility());
  }

  function showCreateUnitModal() {
    dispath(handleCreateUnityModalVisibility());
  }

  return (
    <Header className="overview-header">
      <Select
        defaultValue={selectedUnity.id === 0 ? null : selectedUnity.id}
        onChange={handleChangeSelectedUnity}
        style={{ width: 200 }}
      >
        <Option value={null}>Todas as unidades</Option>
        {allUnits.length > 0 &&
          allUnits.map((unity) => (
            <Option key={unity.id} value={unity.id}>
              {unity.name}
            </Option>
          ))}
      </Select>
      <Button
        disabled={selectedUnity.id === 0 ? true : false}
        type="primary"
        onClick={() => showUnitEditModal()}
      >
        Editar unidade
      </Button>

      <Button type="primary" onClick={() => showCreateUnitModal()}>
        Adicionar unidade
      </Button>
    </Header>
  );
}
