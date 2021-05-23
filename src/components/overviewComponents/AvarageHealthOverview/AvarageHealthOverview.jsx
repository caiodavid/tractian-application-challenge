// React
import { useState, useEffect } from "react";
// Style and Components
import "./AvarageHealthOverview.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Ant Design
import { List, Avatar } from "antd";
// Highcharts
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";
import { getAvarageHealthChartOptions } from "../../../utils/avarageHealthChartOptions";

highchartsMore(Highcharts);
solidGauge(Highcharts);

export default function AvarageHealthOverview() {
  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);
  const allAssets = useSelector((state) => state.assets.allAssets);
  const filteredAssetsByUnityId = useSelector(
    (state) => state.assets.filteredAssetsByUnityId
  );

  const [avarageHealth, setAvarageHealth] = useState(0);

  // useEffect para atualizar pontuacao media de saude
  useEffect(() => {
    let sumOfHealth = 0;
    if (selectedUnity.id === 0) {
      allAssets.map((asset) => {
        sumOfHealth += asset.healthscore;
      });
      let result = sumOfHealth / allAssets.length;
      result = result.toFixed(2);
      setAvarageHealth(parseFloat(result));
    } else {
      filteredAssetsByUnityId.map((asset) => {
        sumOfHealth += asset.healthscore;
      });

      let result = sumOfHealth / filteredAssetsByUnityId.length;
      result = result.toFixed(2);
      setAvarageHealth(parseFloat(result));
    }
  }, [filteredAssetsByUnityId]);

  return (
    <div className="site-layout-background component-box">
      {selectedUnity.id === 0 ? (
        <h1>Pontuaçao média da saúde dos ativos</h1>
      ) : (
        <h1>Pontuaçao média da saúde dos ativos da {selectedUnity.name}</h1>
      )}

      <div className="highcharts-content">
        <HighchartsReact
          highcharts={Highcharts}
          options={getAvarageHealthChartOptions(avarageHealth)}
        />
      </div>
    </div>
  );
}
