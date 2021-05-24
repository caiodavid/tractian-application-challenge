// React
import { useState, useEffect } from "react";
// Style and Components
import logo from "../assets/Logo-Tractian.svg";
import "./HomePage.css";
import Overview from "../components/Overview/Overview";
import AssetsViewer from "../components/AssetsViewer/AssetsViewer";
import AssetDetails from "../components/AssetDatails/AssetDetails";
import AllModals from "../components/modalComponents/AllModals";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { setLoggedCompany } from "../store/Company.store";
import { setUnits } from "../store/Units.store";
import { setUsers } from "../store/Users.store";
import { setAssets } from "../store/Assets.store";
import {
  handleFirstLoad,
  handleChangeActiveContainer,
  handleLoading,
} from "../store/SystemInfos.store";
import { handleEditCompanyModalVisibility } from "../store/Modals.store";
// Ant Design
import { Layout, Menu, Avatar, Alert } from "antd";
import {
  ApiOutlined,
  PieChartOutlined,
  ShopOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Loading from "../components/Loading/Loading";
const { Sider } = Layout;

function HomePage() {
  const [collapsed, setCollapsed] = useState(false);
  const dispath = useDispatch();
  const loggedCompany = useSelector((state) => state.company.loggedCompany);
  const isTheFirstLoad = useSelector((state) => state.systemInfo.firstLoad);
  const activeContainer = useSelector(
    (state) => state.systemInfo.activeContainer
  );
  const isLoading = useSelector((state) => state.systemInfo.loading);
  const isAlertVisible = useSelector((state) => state.systemInfo.showAlert);

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

  function changeActiveContainer(containerName) {
    if (containerName !== activeContainer) {
      dispath(handleChangeActiveContainer(containerName));
			dispath(handleLoading(true));
      setTimeout(() => {
        dispath(handleLoading(false));
      }, 1500);
    }
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AllModals />
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="company-container">
          <Avatar shape="square" size={70} icon={<ShopOutlined />} />
          <h2>{loggedCompany.name}</h2>
          <a onClick={() => dispath(handleEditCompanyModalVisibility())}>
            <EditOutlined />
          </a>
        </div>
        <Menu theme="dark" defaultSelectedKeys={activeContainer} mode="inline">
          <Menu.Item
            key="overview"
            icon={<PieChartOutlined style={{ fontSize: 18 }} />}
            onClick={() => changeActiveContainer("overview")}
            style={{ fontSize: 16, letterSpacing: 1.5 }}
          >
            Visão Geral
          </Menu.Item>
          <Menu.Item
            key="assetsViewer"
            icon={<ApiOutlined style={{ fontSize: 18 }} />}
            style={{ fontSize: 16, letterSpacing: 1.5 }}
            onClick={() => changeActiveContainer("assetsViewer")}
          >
            Ativos
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {activeContainer === "overview" && <Overview />}
            {activeContainer === "assetsViewer" && <AssetsViewer />}
            {activeContainer === "assetDetails" && <AssetDetails />}
            {isAlertVisible && (
              <div className="alert-box">
                <Alert
                  style={{ width: 600 }}
                  showIcon
                  message="Operação concluida com sucesso"
                  type="success"
                />
              </div>
            )}
          </>
        )}
      </Layout>
    </Layout>
  );
}

export default HomePage;
