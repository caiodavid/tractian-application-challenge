// React
import { useState, useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Ant Design
import { Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";

export default function SensorActivity() {
  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);
  const allAssets = useSelector((state) => state.assets.allAssets);
  const filteredAssetsByUnityId = useSelector(
    (state) => state.assets.filteredAssetsByUnityId
  );
  const [totalCollections, setTotalCollections] = useState(0);
  const [totalHoursCollected, setTotalHoursCollected] = useState(0);

  const colStyle = {
    margin: "0",
    border: "1px solid #d8d8d8",
    borderRadius: "8px",
  };

  const contentStyle = {
    padding: "24px",
    minHeight: "170px",
    border: "2px solid #0215297c",
    borderRadius: "8px",
    background: " #fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    let hours = 0;
    let collections = 0;

    if (selectedUnity.id === 0) {
      allAssets.map(
        (asset) => (
          (hours += parseFloat(asset.metrics.totalUptime.toFixed(2))),
          (collections += asset.metrics.totalCollectsUptime)
        )
      );
    } else {
			filteredAssetsByUnityId.map(
        (asset) => (
          (hours += parseFloat(asset.metrics.totalUptime.toFixed(2))),
          (collections += asset.metrics.totalCollectsUptime)
        )
      );
		}

    setTotalHoursCollected(hours);
    setTotalCollections(collections);
  }, [filteredAssetsByUnityId, allAssets]);

  return (
    <Row gutter={[0, 16]}>
      <Col style={colStyle} span={24}>
        <Content style={contentStyle}>
          {selectedUnity.id === 0 ? (
            <>
              <h1>Total de coletas na empresa</h1>
              <h2>{totalCollections}</h2>
            </>
          ) : (
            <>
              <h1>Total de coletas na {selectedUnity.name}</h1>
              <h2>{totalCollections}</h2>
            </>
          )}
        </Content>
      </Col>
      <Col style={colStyle} span={24}>
        <Content style={contentStyle}>
          {selectedUnity.id === 0 ? (
            <>
              <h1>Total de horas de coletas na empresa</h1>
              <h2>{totalHoursCollected}h</h2>
            </>
          ) : (
            <>
              <h1>Total de horas de coletas na {selectedUnity.name}</h1>
              <h2>{totalHoursCollected}h</h2>
            </>
          )}
        </Content>
      </Col>
    </Row>
  );
}
