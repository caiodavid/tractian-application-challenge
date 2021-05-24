// Style and components
import "./Overview.css";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import UsersOverview from "../overviewComponents/UsersOverview/UsersOverview";
import AssetsOverview from "../overviewComponents/AssetsOverview/AssetsOverview";
import AvarageHealthOverview from "../overviewComponents/AvarageHealthOverview/AvarageHealthOverview";
import SensorActivity from "../overviewComponents/SensorActivity/SensorActivity";
import SickAssets from "../overviewComponents/SickAssets/SickAssets";
// Ant Design
import { Layout, Row, Col } from "antd";
const { Content, Footer } = Layout;

export default function Overview() {

  return (
    <>
			<HeaderComponent />
      <Row>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 12 }}>
          <Content style={{ margin: "15px 16px" }}>
            <AssetsOverview />
          </Content>
        </Col>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 12 }}>
          <Content style={{ margin: "15px 16px" }}>
            <UsersOverview />
          </Content>
        </Col>
      </Row>

      <Row>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 8 }}>
          <Content style={{ margin: "15px 16px" }}>
            <AvarageHealthOverview />
          </Content>
        </Col>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 8 }}>
          <Content style={{ margin: "15px 16px" }}>
            <SickAssets />
          </Content>
        </Col>
        <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 8 }}>
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
