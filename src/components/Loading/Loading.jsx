// Style and components
import HeaderComponent from "../HeaderComponent/HeaderComponent";
// Ant Design
import { Layout, Space, Spin } from "antd";
const { Footer } = Layout;

const loadingStyle = {
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}

export default function Loading() {
  return (
    <>
      <HeaderComponent />
      <Space size="middle" style={loadingStyle}>
        <Spin size="large" />
      </Space>
      <Footer style={{ textAlign: "center" }}>
        Desenvolvido por:{" "}
        <a href="https://github.com/caiodavid" target="_blank">
          Caio David de Souza
        </a>
      </Footer>
    </>
  );
}
