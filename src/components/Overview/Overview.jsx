import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setUnits,
  setSelectedUnity,
  clearSelectedUnity,
} from "../../store/Units.store";

import "./Overview.css";

import { Layout, Select } from "antd";
import AssetsOverview from "../overviewComponents/AssetsOverview/AssetsOverview";
const { Content, Footer, Header } = Layout;
const { Option } = Select;

export default function Overview() {
  const dispath = useDispatch();
  const allUnits = useSelector((state) => state.units.allUnits);
  const selectedUnity = useSelector((state) => state.units.selectedUnity);
  const [activeUnits, setActiveUnits] = useState([]);

  useEffect(() => {
    Object.keys(selectedUnity).length === 0 && dispath(setUnits());
  }, []);

  useEffect(() => {
    console.log("object");
    Object.keys(selectedUnity).length === 0
      ? setActiveUnits(allUnits)
      : setActiveUnits([selectedUnity]);
  }, [selectedUnity]);

  const handleChangeSelectedUnity = (unityId) => {
    unityId === null
      ? dispath(clearSelectedUnity())
      : dispath(setSelectedUnity(unityId));
  };

  return (
    <>
      <Header className="overview-header">
        <Select
          defaultValue={
            Object.keys(selectedUnity).length === 0 ? null : selectedUnity.id
          }
          onChange={handleChangeSelectedUnity}
        >
          <Option value={null}>Todas as unidades</Option>
          {allUnits.length > 0 &&
            allUnits.map((unity) => (
              <Option key={unity.id} value={unity.id}>
                {unity.name}
              </Option>
            ))}
        </Select>
      </Header>
      <Content style={{ margin: "15px 16px" }}>
        <AssetsOverview />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Desenvolvido por{" "}
        <a href="https://github.com/caiodavid" target="_blank">
          Caio David de Souza
        </a>
      </Footer>
    </>
  );
}
