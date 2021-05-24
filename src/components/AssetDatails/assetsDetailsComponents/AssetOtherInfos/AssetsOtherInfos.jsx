// Redux
import { useSelector } from "react-redux";
// Ant Design
import { Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";

export default function AssetOtherInfos() {
  const selectedAsset = useSelector((state) => state.assets.selectedAsset);

  const colStyle = {
    margin: "0",
    borderRadius: "8px",
  };

  const contentStyle = {
    padding: "24px",
    minHeight: "172px",
    border: "2px solid #0215297c",
    borderRadius: "8px",
    background: " #fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

	function checkValue(value) {
		if(value === undefined || value === null|| value ===0) {
			return "Valor não coletado."
		} else {
			return value
		}
	}

	function checkHourValue(value) {
		if(value === undefined || value === null|| value ===0) {
			return "Valor não coletado."
		} else {
			return `${value.toFixed(1)}h`
		}
	}

  return (
    <Row gutter={[16, 16]}>
      <Col style={colStyle} span={12}>
        <Content style={contentStyle}>
          <h1>RPM: </h1>
          <h2>{checkValue(selectedAsset.specifications.rpm)}</h2>
        </Content>
      </Col>
      <Col style={colStyle} span={12}>
        <Content style={contentStyle}>
          <h1>Potência:</h1>
          <h2>{checkValue(selectedAsset.specifications.power)}</h2>
        </Content>
      </Col>
			<Col style={colStyle} span={12}>
        <Content style={contentStyle}>
          <h1>Total de Coletas: </h1>
          <h2>{checkValue(selectedAsset.metrics.totalCollectsUptime)}</h2>
        </Content>
      </Col>
      <Col style={colStyle} span={12}>
        <Content style={contentStyle}>
          <h1>Total de Horas de Coletas</h1>
          <h2>{ checkHourValue(selectedAsset.metrics.totalUptime)}</h2>
        </Content>
      </Col>
    </Row>
  );
}
