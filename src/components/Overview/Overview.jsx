// React
import { useState, useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setUnits,
  setSelectedUnity,
  clearSelectedUnity,
} from "../../store/Units.store";
// Style and components
import "./Overview.css";
import UsersOverview from "../overviewComponents/UsersOverview/UsersOverview";
import AssetsOverview from "../overviewComponents/AssetsOverview/AssetsOverview";
// Ant Design
import { Layout, Select, Row, Col } from "antd";
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

  return (
    <>
      <Header className="overview-header">
        <Select
          defaultValue={
            Object.keys(selectedUnity).length === 0 ? null : selectedUnity.id
          }
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
      </Header>
      <Row>
        <Col span={12}>
          <Content style={{ margin: "15px 16px" }}>
            <AssetsOverview />
          </Content>
        </Col>
				<Col span={12}>
          <Content style={{ margin: "15px 16px" }}>
            <UsersOverview />
          </Content>
        </Col>
      </Row>

			<Row>
        <Col span={24}>
          <Content style={{ margin: "15px 16px" }}>
            <AssetsOverview />
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
