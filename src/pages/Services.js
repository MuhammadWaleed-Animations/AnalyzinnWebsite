import React from "react";
import {
  MergeFilled,
  PieChartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Tab from "../components/BAnalytics/Tab/Tab";
const array = [
  {
    key: "0",
    label: "Business Analytics",
    children:
      "Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.",
    link: "/Bussiness-analytics",
    component: PieChartOutlined,
  },
  {
    key: "1",
    label: "Digital Marketing & Analytics",
    children:
      "Are your digital marketing goals driven by data, or just a shot in the dark? Either way, ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time",
    link: "/DigitalMarketing",
    component: ShareAltOutlined,
  },
  {
    key: "2",
    label: "Automation & Integration",
    children:
      "Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.",
    link: "/Automation",
    component: MergeFilled,
  },
];

const Services = () => {
  return (
    <div>
      <Tab arr={array} />
      {/*<BussinessAnalytics />             
 just for debugging */}
    </div>
  );
};
export default Services;
