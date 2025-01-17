import "./css/HomeTop.css";
import { Button, Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <Layout className="App_Home">
      <div className="background-image_Home"></div>
      <Content className="Content_Home">
        <div className="site-layout-content_Home" style={{ padding: "20px" }}>
          <Title
            level={1}
            style={{
              fontFamily: "Times New Roman, serif",
              fontSize: "4.3em",
              marginBottom: "50px",
              width: "60%",
              marginLeft: "20%",
              marginTop: "5%",
            }}
          >
            Grow Your Business with Data driven Decision-Making!
          </Title>
          <Paragraph
            style={{
              fontSize: "1.6em",
              fontFamily: "Times New Roman, serif",
              marginBottom: "50px",
              width: "55%",
              marginLeft: "22%",
              color: "#ffffff !important",
            }}
          >
            "Data, The Goldmine of the 21st Century". Reach out to us to know
            how your data can grow your business.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{ margin: "10px", color: "white", fontWeight: "bolder" }}
          >
            Request a Free Consultation
          </Button>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
