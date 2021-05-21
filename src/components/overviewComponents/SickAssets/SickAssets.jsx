// React
import { useState, useEffect } from "react";
// Style and Components
import "./SickAssets.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Ant Design
import { List, Avatar } from "antd";

export default function SickAssets() {
  const dispath = useDispatch();
  const allAssets = useSelector((state) => state.assets.allAssets);
  const [sickAssets, setSickAssets] = useState([]);

  // UseEffect para filtrar ativos "doentes"
  useEffect(() => {
    let filteredAssets = allAssets.filter((asset) => asset.healthscore < 60);
    setSickAssets(filteredAssets);
  }, [allAssets]);

  return (
    <>
      <div className="site-layout-background component-box">
        <h1>Ativos da empresa com saúde abaixo de 60</h1>
        <div className="demo-infinite-container2">
          <List
            dataSource={sickAssets}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar shape="square" size={50} src={item.image} />
                  }
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={`Healthscore: ${item.healthscore}`}
                />
                <a>Ver mais</a>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    </>
  );
}
