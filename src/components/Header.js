import { Layout, Image, Menu } from "antd";
import {
  HomeOutlined,
  BarChartOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../logo/logo.png";

const { Header } = Layout;
const { SubMenu } = Menu;

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Header className="Header">
      <Image
        src={logo}
        alt="Logo"
        style={{
          height: "220px",
        }}
        preview={false}
      />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ marginLeft: "auto", backgroundColor: "white" }}
      >
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          style={{ width: "125px", textAlign: "center" }}
          onClick={() => navigate("/")}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{ width: "125px", textAlign: "center" }}
          onClick={() => navigate("/services")}
        >
          <SubMenu icon={<BarChartOutlined />} title="Services">
            <Menu.Item
              key="2-1"
              onClick={() => navigate("/services/analytics")}
            >
              Business Analytics
            </Menu.Item>
            <Menu.Item
              key="2-2"
              onClick={() => navigate("/services/marketing")}
            >
              Digital Marketing & Analytics
            </Menu.Item>
            <Menu.Item
              key="2-3"
              onClick={() => navigate("/services/automation")}
            >
              Automation & Integration
            </Menu.Item>
          </SubMenu>
        </Menu.Item>

        <Menu.Item
          key="3"
          icon={<InfoCircleOutlined />}
          style={{ width: "125px", textAlign: "center" }}
          onClick={() => navigate("/about")}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<PhoneOutlined />}
          style={{ width: "125px", textAlign: "center" }}
          onClick={() => navigate("/contact")}
        >
          Contact
        </Menu.Item>
      </Menu>
    </Header>
  );
}