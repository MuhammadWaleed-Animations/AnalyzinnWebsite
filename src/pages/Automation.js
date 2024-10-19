import React from "react";
import OurServices from "../components/Automation/OurServices";
import AutomationIntegration from "../components/Automation/AutomationIntegration";
import AutomationTitle from "../components/Automation/AutomationTitle";
import AutomationQuestion from "../components/Automation/AutomationQuestion";

const AutomationPage = () => {
  return (
    <div>
      <AutomationTitle />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <AutomationIntegration />
      </div>
      <OurServices />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <AutomationQuestion />
      </div>
      
    </div>
  );
};

export default AutomationPage;
