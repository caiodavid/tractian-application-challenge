// Redux
import { useSelector } from "react-redux";
// Ant Design
import { Divider } from "antd";
// highcharts
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";
import { getAvarageHealthChartOptions } from "../../../../utils/avarageHealthChartOptions";
import { useEffect, useState } from "react";

highchartsMore(Highcharts);
solidGauge(Highcharts);

export default function AssetHealthscore() {
  const [teste, setTeste] = useState(true);
  const selectedAsset = useSelector((state) => state.assets.selectedAsset);

  useEffect(() => {
    setTimeout(() => {
      setTeste(false);
    }, 1000);
  }, []);
  return (
    <div className="site-layout-background component-box">
      <div className="asset-info-container-header">
        <h1>Saúde do ativo</h1>
      </div>
      <Divider style={{ marginTop: 0 }} />
      <div className="asset-info-container">
        <div className="highcharts-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={getAvarageHealthChartOptions(selectedAsset.healthscore)}
          />
        </div>
      </div>
    </div>
  );
}
