import { useState, useEffect } from "react";

import "./Overview.css";

import { Layout, Breadcrumb } from "antd";

const { Content, Footer } = Layout;

export default function Overview() {
  return (
    <>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background component-box">
          Caio is a cat.
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </>
  );
}
