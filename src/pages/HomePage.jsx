import { useState } from "react";

import logo from "../assets/Logo-Tractian.svg";
import "./HomePage.css";

import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import { ApiOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function HomePage() {
  const [collapsed, setCollapsed] = useState(false);

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
        </div>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background component-box">
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default HomePage;
