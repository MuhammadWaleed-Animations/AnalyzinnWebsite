// ParentComponent.js
import React from "react"
import Welcome from "./Welcome/Welcome";
import ImgText from "./imgText/imgText.js";
import WhyOurServices from "./WhyOurServices/WhyOurServices.js";
import Tab2 from "./Tab2/Tab2.js";
import './BAnalytics.css';

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
        "Business Discovery: Opportunity/Threats, Insights & Segmentation, Marketing & Attribution Models, Product Lifecycle, Customer Analytics (CLV, RFM, Churn), and Dashboards (Salesforce, Marketo).",
        img: "img11.webp" 
    },
    {
      key: "2",
      label: "Data Analysis & Visualization",
      children:
      "Analyze and prioritize business objectives, focusing on key questions. Develop wireframes, product-level and customer-level dashboards, and provide recommendations through detailed reports.",
      img: "img12.webp" 
    },
  ];
const BAnalytics = () => {
    return (
        <div>
        <Welcome />
        <ImgText
            title="Problems We Solve"
            text="Unconsolidated data and unintegrated CRMs create silos, limiting insights and visibility. Effective analytics unlocks actionable insights, driving informed decisions and growth."
            image="ProblemWeSolve.png" 
            />
            <WhyOurServices />
        <Tab2 arr={array1} />
        
        </div>
    )
}
//Waleed 22L6824
export default BAnalytics
