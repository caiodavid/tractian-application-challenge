import { useState, useEffect } from "react";

import logo from "../assets/Logo-Tractian.svg";
import "./HomePage.css";

import { Layout, Menu, Avatar } from "antd";
import { ApiOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { setLoggedCompany, edit } from "../store/Company.store";
import { useDispatch, useSelector } from "react-redux";
import Overview from "../components/Overview/Overview";

const { Sider } = Layout;

function HomePage() {
  const [collapsed, setCollapsed] = useState(false);
	const dispath = useDispatch()
	const loggedCompany = useSelector(state => state.company.loggedCompany)
	const hasEdited = useSelector(state => state.company.hasEdited)

	useEffect(() => {
		!hasEdited && dispath(setLoggedCompany());
	},[])
	
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
        <div>
          <Avatar shape="square" size={64} icon={<UserOutlined />} />
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
