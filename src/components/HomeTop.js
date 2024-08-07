import "./HomeTop.css";
import { Button, Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <Layout className="App">
      <div className="background-image"></div>
      <Content className="Content">
        <div className="site-layout-content" style={{ padding: "20px" }}>
          <Title level={1} style={{ fontSize: "3.2em", marginBottom: "100px" }}>
            Grow Your Business with Data-driven Decision-Making!
          </Title>
          <Paragraph style={{ fontSize: "1.5em", marginBottom: "80px" }}>
            "Data, The Goldmine of the 21st Century". Reach out to us to know
            how your data can grow your business.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{ margin: "10px", color: "white" }}
          >
            Request a Free Consultation
          </Button>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
