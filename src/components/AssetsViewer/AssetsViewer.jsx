// React
import { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilteredAssetsByUnityId,
  deleteAsset,
  setFilteredAssetsByUnityId,
  setSelectedAsset,
} from "../../store/Assets.store";
import {
  handleCreateAssetModalVisibility,
  handleEditAssetModalVisibility,
} from "../../store/Modals.store";
// Style and components
import "./AssetsViewer.css";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { StatusTag } from "../StatusTag/StatusTag";
// Utils
import { getAssetResponsible } from "../../utils/getAssetResponsible";
// Ant Design
import { Layout, Card, Button, Popconfirm } from "antd";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { handleChangeActiveContainer } from "../../store/SystemInfos.store";
const { Footer } = Layout;
const { Meta } = Card;

export default function AssetsViewer() {
  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);

  const allAssets = useSelector((state) => state.assets.allAssets);
  const allUsers = useSelector((state) => state.users.allUsers);
  const [selectedAssets, setSelectedAssets] = useState(
    useSelector((state) => state.assets.allAssets)
  );
  const filteredAssetsByUnityId = useSelector(
    (state) => state.assets.filteredAssetsByUnityId
  );

  useEffect(() => {
    if (selectedUnity.id === 0) {
      dispath(clearFilteredAssetsByUnityId());
    } else {
      dispath(setFilteredAssetsByUnityId(selectedUnity.id));
    }
  }, [selectedUnity, allAssets]);

  useEffect(() => {
    if (selectedUnity.id === 0) {
      setSelectedAssets(allAssets);
    } else {
      setSelectedAssets(filteredAssetsByUnityId);
    }
  }, [filteredAssetsByUnityId, allAssets]);

  function showAssetEditModal(id) {
    dispath(setSelectedAsset(id));
    dispath(handleEditAssetModalVisibility());
  }

  function showAssetCreateModal() {
    dispath(handleCreateAssetModalVisibility());
  }

  function goToAssetDetail(id) {
    dispath(setSelectedAsset(id));
    dispath(handleChangeActiveContainer("assetDetails"));
  }

  return (
    <>
      <HeaderComponent />
      <div className="assets-component-container">
        <Button
          style={{ width: 200 }}
          type="primary"
          onClick={() => showAssetCreateModal()}
        >
          Adicionar ativo
        </Button>
        <div className="assets-container">
          {selectedAssets.map((asset) => (
            <Card
              key={asset.id}
              hoverable
              style={{ minWidth: 300, minHeight: 300 }}
              cover={
                <img
                  alt="assetImage"
                  src={asset.image}
                  style={{ width: 300, height: 260 }}
                />
              }
              actions={[
                <EyeOutlined onClick={() => goToAssetDetail(asset.id)} />,
                <EditOutlined onClick={() => showAssetEditModal(asset.id)} />,
                <Popconfirm
                  placement="topLeft"
                  title={"Você tem certeza que deseja deletar este ativo?"}
                  onConfirm={() => dispath(deleteAsset(asset.id))}
                  okText="Sim"
                  cancelText="Não"
                >
                  <DeleteOutlined />
                </Popconfirm>
              ]}
            >
              <StatusTag name={asset.status} />
              <Meta
                title={asset.name}
                description={`Responsável: ${getAssetResponsible(
                  asset.responsible,
                  allUsers
                )}`}
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
