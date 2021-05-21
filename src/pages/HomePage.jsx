// React
import { useState, useEffect } from "react";
// Style and Components
import logo from "../assets/Logo-Tractian.svg";
import fakeCompanyLogo from "../assets/dunder-mifflin-logo.jpg"
import "./HomePage.css";
import Overview from "../components/Overview/Overview";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { setLoggedCompany, edit } from "../store/Company.store";
import { setUnits } from "../store/Units.store";
import { setUsers } from "../store/Users.store";
import { setAssets } from "../store/Assets.store";
import { handleFirstLoad } from "../store/SystemInfos.store"
// Ant Design
import { Layout, Menu, Avatar } from "antd";
import { ApiOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";
const { Sider } = Layout;

function HomePage() {
  const [collapsed, setCollapsed] = useState(false);
	const dispath = useDispatch()
	const loggedCompany = useSelector(state => state.company.loggedCompany)
	const isTheFirstLoad = useSelector(state => state.systemInfo.firstLoad)

	useEffect(() => {
		isTheFirstLoad && setInitialStates();
	},[])

	function setInitialStates() {
		dispath(setLoggedCompany());
		dispath(setUnits());
		dispath(setUsers());
		dispath(setAssets());
		dispath(handleFirstLoad());
	}
	
  return (
    <Layout style={{ minHeight: "100vh" }}>
			
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Visão Geral
          </Menu.Item>
          <Menu.Item key="2" icon={<ApiOutlined />}>
            Ativos
          </Menu.Item>
        </Menu>
        <div className="company-container">
          <Avatar src={fakeCompanyLogo} shape="square" size={70} icon={<UserOutlined />} />
					<h2 onClick={() => dispath(edit('Caio Enterprise'))}>{loggedCompany.name}</h2>
        </div>
      </Sider>

      <Layout className="site-layout">
        <Overview />
      </Layout>

    </Layout>
  );
}

export default HomePage;
