// React
import { useState, useEffect } from "react";
// Style and Components
import "./AssetInfo.css";
// Utils
import { getAssetUnit } from "../../../../utils/getAssetUnit";
import { getAssetResponsible } from "../../../../utils/getAssetResponsible";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { handleEditAssetModalVisibility } from "../../../../store/Modals.store";
import { deleteAsset, setSelectedAsset } from "../../../../store/Assets.store";
// Ant Design
import { Button, Col, Divider, Popconfirm, Row } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { StatusTag } from "../../../StatusTag/StatusTag";
import { handleChangeActiveContainer } from "../../../../store/SystemInfos.store";

export default function AssetInfo() {
  const dispath = useDispatch();
  const selectedAsset = useSelector((state) => state.assets.selectedAsset);
  const allUnits = useSelector((state) => state.units.allUnits);
  const allUsers = useSelector((state) => state.users.allUsers);
  const allAssets = useSelector((state) => state.assets.allAssets);

  function showAssetEditModal(id) {
    dispath(setSelectedAsset(id));
    dispath(handleEditAssetModalVisibility());
  }

	function handleDeleteAsset() {
    dispath(handleChangeActiveContainer('assetsViewer'));
		dispath(deleteAsset(selectedAsset.id))
  }

  useEffect(() => {
    dispath(setSelectedAsset(selectedAsset.id));
  }, [allAssets]);

  return (
    <div className="site-layout-background component-box">
      <div className="asset-info-container-header">
        <h1>{selectedAsset.name}</h1>
        <div className="header-buttons">
          <Button
            type="link"
            size="large"
            icon={<EditOutlined />}
            onClick={() => showAssetEditModal(selectedAsset.id)}
          />
          <Popconfirm
            placement="topLeft"
            title={"Você tem certeza que deseja deletar este ativo?"}
            onConfirm={() => handleDeleteAsset()}
            okText="Sim"
            cancelText="Não"
          >
            <Button danger type="text" size="large" icon={<DeleteOutlined />} />
          </Popconfirm>
          
        </div>
      </div>
      <Divider style={{ marginTop: 0 }} />
      <div className="asset-info-container">
        <Row>
          <Col span={14}>
            <img src={selectedAsset.image} alt="" />
          </Col>
          <Col span={10}>
            <div className="asset-info-item">
              <StatusTag name={selectedAsset.status} />
            </div>

            <div className="asset-info-item">
              <h3>Modelo: </h3>
              <p>{selectedAsset.model}</p>
            </div>

            <div className="asset-info-item big-item">
              <h3>Unidade: </h3>
              <p>{getAssetUnit(selectedAsset.unitId, allUnits)}</p>
            </div>

            <div className="asset-info-item big-item">
              <h3>Responsável: </h3>
              <p>{getAssetResponsible(selectedAsset.responsible, allUsers)}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
