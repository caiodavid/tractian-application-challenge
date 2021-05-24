// Redux
import { useDispatch, useSelector } from "react-redux";
// Style and components
import "./AssetDetails.css";
// Ant Design
import { Layout, Row, Col, Button } from "antd";
import { handleChangeActiveContainer } from "../../store/SystemInfos.store";
import AssetInfo from "./assetsDetailsComponents/AssetInfo/AssetInfo";
import AssetSensors from "./assetsDetailsComponents/AssetSensors/AssetSensors";
import AssetHealthscore from "./assetsDetailsComponents/AssetHealthscore/AssetHealthscore";
import AssetSpecifications from "./assetsDetailsComponents/AssetSpecifications/AssetSpecifications";
import AssetOtherInfos from "./assetsDetailsComponents/AssetOtherInfos/AssetsOtherInfos";
const { Content, Footer, Header } = Layout;

export default function AssetDetails() {
  const dispath = useDispatch();
  return (
    <>
      <Header className="overview-header">
        <Button
          type="secondary"
          onClick={() => dispath(handleChangeActiveContainer("assetsViewer"))}
        >
          Voltar para todos os ativos
        </Button>
      </Header>
      <div className="details-container">
        <Row>
          <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 8 }}>
            <Content style={{ margin: "15px 16px" }}>
              <AssetInfo />
            </Content>
          </Col>
          <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 8 }}>
            <Content style={{ margin: "15px 16px" }}>
              <AssetSensors />
            </Content>
          </Col>
          <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 8 }}>
            <Content style={{ margin: "15px 16px" }}>
              <AssetHealthscore />
            </Content>
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 12 }}>
            <Content style={{ margin: "15px 16px" }}>
              <AssetSpecifications />
            </Content>
          </Col>
          <Col style={{ margin: "0" }} lg={{ span: 24 }} xl={{ span: 12 }}>
            <Content style={{ margin: "15px 16px" }}>
              <AssetOtherInfos />
            </Content>
          </Col>
        </Row>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Desenvolvido por:{" "}
        <a href="https://github.com/caiodavid" target="_blank">
          Caio David de Souza
        </a>
      </Footer>
    </>
  );
}
