// React
import { useState, useEffect } from "react";
// Style and Components
// import "./UsersOverview.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Ant Design
import { List, Avatar } from "antd";

export default function SickAssets() {
  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);

  useEffect(() => {
    
  }, [selectedUnity]);


  return (
    <div className="site-layout-background component-box">
        <h1>Ativos da empresa com saúde abaixo de 60%</h1>
    </div>
  );
}