// React
import { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilteredAssetsByUnityId,
  setFilteredAssetsByUnityId,
} from "../../store/Assets.store";
// Style and components
import "./AssetsViewer.css";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
// Utils
import { getAssetResponsible } from "../../utils/getAssetResponsible";
// Ant Design
import { Layout, Card, Button } from "antd";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
const { Footer } = Layout;
const { Meta } = Card;

export default function AssetsViewer() {
  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);

  const allAssets = useSelector((state) => state.assets.allAssets);
	const [selectedAssets, setSelectedAssets] = useState(useSelector((state) => state.assets.allAssets))
	const filteredAssetsByUnityId = useSelector(
    (state) => state.assets.filteredAssetsByUnityId
  );

  useEffect(() => {
    if (selectedUnity.id === 0) {
      dispath(clearFilteredAssetsByUnityId());
    } else {
      dispath(setFilteredAssetsByUnityId(selectedUnity.id));
    }
  }, [selectedUnity]);

	useEffect(() => {
    if (selectedUnity.id === 0) {
      setSelectedAssets(allAssets);
    } else {
      setSelectedAssets(filteredAssetsByUnityId)
    }
  }, [filteredAssetsByUnityId]);


  const StatusTag = (props) => {
    switch (props.name) {
      case "inAlert":
        return (
          <div className="tag-box alert">
            <p>Em alerta</p>
          </div>
        );

      case "inDowntime":
        return (
          <div className="tag-box downtime">
            <p>Parado</p>
          </div>
        );

      case "inOperation":
        return (
          <div className="tag-box operation">
            <p>Operando</p>
          </div>
        );

      default:
        break;
    }
    return props.name;
  };

  return (
    <>
      <HeaderComponent />
      <div className="assets-component-container">
        <Button style={{ width: 200 }} type="primary">
          Adicionar ativo
        </Button>
        <div className="assets-container">
          {selectedAssets.map((asset) => (
            <Card
              hoverable
              style={{ minWidth: 300, minHeight: 300 }}
              cover={
                <img
                  alt="assetImage"
                  src={asset.image}
                  style={{ width: 300, height: 260 }}
                />
              }
              actions={[<EyeOutlined />, <EditOutlined />, <DeleteOutlined />]}
            >
              <StatusTag name={asset.status} />
              <Meta
                title={asset.name}
                description={getAssetResponsible(asset.responsible)}
              />
            </Card>
          ))}
        </div>
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
