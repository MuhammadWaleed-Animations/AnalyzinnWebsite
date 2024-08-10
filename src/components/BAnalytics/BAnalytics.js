// ParentComponent.js
import React from "react"
import Welcome from "./Welcome/Welcome";
import ImgText from "./imgText/imgText.js";
import WhyOurServices from "./WhyOurServices/WhyOurServices.js";
import Tab2 from "./Tab2/Tab2.js";


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
      img: "img12.webp" 
    },
  ];
const BAnalytics = () => {
    return (
        <div>
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
//Waleed 22L6824
export default BAnalytics
