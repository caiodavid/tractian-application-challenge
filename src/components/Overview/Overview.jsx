// Redux
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUnity, clearSelectedUnity } from "../../store/Units.store";
// Style and components
import "./Overview.css";
import UsersOverview from "../overviewComponents/UsersOverview/UsersOverview";
import AssetsOverview from "../overviewComponents/AssetsOverview/AssetsOverview";
import AvarageHealthOverview from "../overviewComponents/AvarageHealthOverview/AvarageHealthOverview";
import SensorActivity from "../overviewComponents/SensorActivity/SensorActivity";
import SickAssets from "../overviewComponents/SickAssets/SickAssets";
// Ant Design
import { Layout, Select, Row, Col, Button } from "antd";
import {
  handleCreateUnityModalVisibility,
  handleEditUnityModalVisibility,
} from "../../store/Modals.store";
const { Content, Footer, Header } = Layout;
const { Option } = Select;

export default function Overview() {
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
    <>
      <Header className="overview-header">
        <Select
          defaultValue={selectedUnity.id === 0 ? null : selectedUnity.id}
          onChange={handleChangeSelectedUnity}
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
      <Row>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 12 }}>
          <Content style={{ margin: "15px 16px" }}>
            <AssetsOverview />
          </Content>
        </Col>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 12 }}>
          <Content style={{ margin: "15px 16px" }}>
            <UsersOverview />
          </Content>
        </Col>
      </Row>

      <Row>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 8 }}>
          <Content style={{ margin: "15px 16px" }}>
            <AvarageHealthOverview />
          </Content>
        </Col>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 8 }}>
          <Content style={{ margin: "15px 16px" }}>
            <SickAssets />
          </Content>
        </Col>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 8 }}>
          <Content style={{ margin: "15px 16px" }}>
            <SensorActivity />
          </Content>
        </Col>
      </Row>

      <Footer style={{ textAlign: "center" }}>
        Desenvolvido por:{" "}
        <a href="https://github.com/caiodavid" target="_blank">
          Caio David de Souza
        </a>
      </Footer>
    </>
  );
}
