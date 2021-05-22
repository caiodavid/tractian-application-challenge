// React
import { useState, useEffect } from "react";
// Style and Components
import logo from "../assets/Logo-Tractian.svg";
import "./HomePage.css";
import Overview from "../components/Overview/Overview";
import AllModals from "../components/modalComponents/AllModals";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { setLoggedCompany, edit } from "../store/Company.store";
import { setUnits } from "../store/Units.store";
import { setUsers } from "../store/Users.store";
import { setAssets } from "../store/Assets.store";
import { handleFirstLoad } from "../store/SystemInfos.store";
import { handleEditCompanyModalVisibility } from "../store/Modals.store";
// Ant Design
import { Layout, Menu, Avatar } from "antd";
import {
  ApiOutlined,
  PieChartOutlined,
  ShopOutlined,
  EditOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

function HomePage() {
  const [collapsed, setCollapsed] = useState(false);
  const dispath = useDispatch();
  const loggedCompany = useSelector((state) => state.company.loggedCompany);
  const isTheFirstLoad = useSelector((state) => state.systemInfo.firstLoad);

  useEffect(() => {
    isTheFirstLoad && setInitialStates();
  }, []);

  function setInitialStates() {
    dispath(setLoggedCompany());
    dispath(setUnits());
    dispath(setUsers());
    dispath(setAssets());
    dispath(handleFirstLoad());
  }

  return (
    <Layout style={{ mixHeight: "100vh" }}>
      <AllModals />
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="company-container">
          <Avatar shape="square" size={70} icon={<ShopOutlined />} />
          <h2>{loggedCompany.name}</h2>
          <a onClick={() => dispath(handleEditCompanyModalVisibility())}>
            Editar <EditOutlined />
          </a>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Visão Geral
          </Menu.Item>
          <Menu.Item key="2" icon={<ApiOutlined />}>
            Ativos
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Overview />
      </Layout>
    </Layout>
  );
}

export default HomePage;
