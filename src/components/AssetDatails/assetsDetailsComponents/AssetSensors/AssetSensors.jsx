// Redux
import { useSelector } from "react-redux";
// Ant Design
import { Divider, List } from "antd";
import { BranchesOutlined } from "@ant-design/icons";

export default function AssetSensors() {
  const selectedAsset = useSelector((state) => state.assets.selectedAsset);

  return (
    <div className="site-layout-background component-box">
      <div className="asset-info-container-header">
        <h1>Sensores</h1>
      </div>
      <Divider style={{ marginTop: 0 }} />
      <div className="asset-info-container">
        <List
          itemLayout="horizontal"
          dataSource={selectedAsset.sensors}
          renderItem={(item) => (
            <List.Item>
							<BranchesOutlined style={{ marginRight: 10, fontSize: 24}}/>
              <List.Item.Meta
                title={<p style={{ margin:0, fontSize: 24}}>{item}</p>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
