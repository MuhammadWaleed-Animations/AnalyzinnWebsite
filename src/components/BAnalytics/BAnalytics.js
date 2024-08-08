// ParentComponent.js
import React from "react"
import Tab from "./Tab/Tab"
import Welcome from "./Welcome/Welcome";
import ImgText from "./imgText/imgText.js";
import WhyOurServices from "./WhyOurServices/WhyOurServices.js";
import Tab2 from "./Tab2/Tab.js";
import { MergeFilled, PieChartOutlined, ShareAltOutlined } from '@ant-design/icons'; // Import the icons

const array = [
    {
      key: "0",
      label: "Business Analytics",
      children:
        "Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.",
      link: "link0",
      component: PieChartOutlined
    },
    {
      key: "1",
      label: "Digital Marketing & Analytics",
      children:
        "Are your digital marketing goals driven by data, or just a shot in the dark? Either way, ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time",
      link: "link1",
      component: ShareAltOutlined
    },
    {
      key: "2",
      label: "Automation & Integration",
      children:
        "Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.",
      link: "link2",
      component: MergeFilled
    },
  ];





  const array1 = [
    {
      key: "0",
      label: "Data Management Services",
      children:
        "Database Systems Automation. Quality Control. Data Integration & Warehousing. Transformation.",
        img: "img10.jpg" 
    },
    {
      key: "1",
      label: "Marketing Analytics",
      children:
        "Business Discovery with Marketing Stakeholders Opportunity/Threat Identification Marketing and Customer Insights, Segmentation, and Personalization Marketing Mix Modeling (MMM) Attribution Modeling Product Life Cycle Analysis Customer Analytics Services Customer Lifetime Value / RFM Analysis Customer Journey Analysis Retention/Churn Analysis Marketing Dashboards (Salesforce, Marketo, Klipfolio, etc)",
        img: "img11.webp" 
    },
    {
      key: "2",
      label: "Data Analysis & Visualization",
      children:
        "Business objectives Analysis:Identify and prioritize your objectives and burning questions to focus our analysis. Visibility Wireframing Product Level Dashboards and visualizations Customer Level Dashboards and visualizations Recommendations Reports",
      img: "img12.jpg" 
    },
  ];
const BAnalytics = () => {
    return (
        <div>
        <Tab arr={array} />
        <Welcome />
        <ImgText
            title="Problems We Solve"
            text="Lack of consolidation in your data & the inability to extract meaningful information. Multiple data sources without a unified reporting mechanism for critical insights and visualizations, leading to manual data cleaning & reporting. Unintegrated CRMs and core business software lead to multiple silos of data without holistic visibility. Data Analytics, for any business or application, delivers more refined, highly accurate & intelligent actionable insights which foster a culture of data-driven decisions & growth."
            image="ProblemWeSolve.png" 
            />
            <WhyOurServices />
        <Tab2 arr={array1} />



        </div>
    )
}

export default BAnalytics
