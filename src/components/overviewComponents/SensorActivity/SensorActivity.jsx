// React
import { useState, useEffect } from "react";
// Style and Components
// import "./UsersOverview.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Ant Design
import { List, Avatar } from "antd";

export default function SensorActivity() {
  const dispath = useDispatch();
  const selectedUnity = useSelector((state) => state.units.selectedUnity);

  useEffect(() => {
    
  }, [selectedUnity]);


  return (
    <div className="site-layout-background component-box">
        <h1>Atividade dos sensores da empresa</h1>
    </div>
  );
}