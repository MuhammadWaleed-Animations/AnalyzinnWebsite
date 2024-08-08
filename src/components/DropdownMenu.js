import { Menu, Dropdown, Button, Image, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../logo/logo.png";
import "./css/DropdownMenu.css";

const { Header } = Layout;

const DropdownMenu = () => {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => navigate("/")}
        style={{ textAlign: "center" }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="2"
        style={{ width: "125px", textAlign: "center" }}
        onClick={() => navigate("/services")}
      >
        Services
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => navigate("/About")}
        style={{ textAlign: "center" }}
      >
        About
      </Menu.Item>
      <Menu.Item
        key="4"
        onClick={() => navigate("/contact")}
        style={{ textAlign: "center" }}
      >
        Contact
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="dropdown-container">
      <Image
        src={logo}
        alt="Logo"
        style={{
          height: "200px",
        }}
        preview={false}
        onClick={() => navigate("/")}
      />
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button icon={<MenuOutlined />} className="dropdown-button" />
      </Dropdown>
    </Header>
  );
};

export default DropdownMenu;
