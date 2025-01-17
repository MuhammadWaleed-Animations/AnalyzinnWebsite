import { Layout, Image, Menu } from "antd";
import {
  HomeOutlined,
  BarChartOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./css/Header.css";
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
          height: "170px", // Increased size of the logo
        }}
        preview={false}
      />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[""]}
        style={{
          marginLeft: "auto",
          background: "linear-gradient(45deg, #6a11cb, #a084ca)", // Updated second color to light purple
          borderRadius: "10px",
          padding: "10px 20px",
        }}
      >
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          className="menu-item"
          onClick={() => navigate("/")}
        >
          Home
        </Menu.Item>
        <Menu.Item key="2" className="menu-item">
          <SubMenu icon={<BarChartOutlined />} title="Services">
            <Menu.Item key="2-1" onClick={() => navigate("/Bussiness-analytics")}>
              Business Analytics
            </Menu.Item>
            <Menu.Item key="2-2" onClick={() => navigate("/DigitalMarketing")}>
              Digital Marketing & Analytics
            </Menu.Item>
            <Menu.Item key="2-3" onClick={() => navigate("/Automation")}>
              Automation & Integration
            </Menu.Item>
            <Menu.Item key="2-4" onClick={() => navigate("/App-development")}>
              App Development
            </Menu.Item>
            <Menu.Item key="2-5" onClick={() => navigate("/Web-Development")}>
              Web Development
            </Menu.Item>
          </SubMenu>
        </Menu.Item>

        <Menu.Item
          key="3"
          icon={<InfoCircleOutlined />}
          className="menu-item"
          onClick={() => navigate("/about")}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<PhoneOutlined />}
          className="menu-item"
          onClick={() => navigate("/contact")}
        >
          Contact
        </Menu.Item>
      </Menu>
    </Header>
  );
}
