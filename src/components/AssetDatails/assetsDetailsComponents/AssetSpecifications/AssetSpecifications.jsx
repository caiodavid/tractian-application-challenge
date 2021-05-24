// React
import { useEffect } from "react";
// Redux
import { useSelector } from "react-redux";
// Ant Design
import { Col, Divider, Row } from "antd";
// highcharts
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";
import { maxTemperatureChartOptions } from "../../../../utils/maxTemperatureChartOptions";

highchartsMore(Highcharts);
solidGauge(Highcharts);

export default function AssetSpecifications() {
  const selectedAsset = useSelector((state) => state.assets.selectedAsset);
	const allAssets = useSelector((state) => state.assets.allAssets);

	useEffect(() => {
    maxTemperatureChartOptions(selectedAsset.specifications.maxTemp);
  }, [selectedAsset, allAssets]);

  return (
    <div className="site-layout-background component-box">
      <div className="asset-info-container-header">
        <h1>Temperatura do ativo</h1>
      </div>
      <Divider style={{ marginTop: 0, marginBottom: 0 }} />
      <div className="asset-info-container">
        <Row>
          <Col span={24}>
            <div className="highcharts-content">
              <HighchartsReact
                highcharts={Highcharts}
                options={maxTemperatureChartOptions(
                  parseFloat(selectedAsset.specifications.maxTemp)
                )}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
