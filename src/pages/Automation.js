import React from "react";
import OurServices from "../components/OurServices";
import AutomationIntegration from "../components/AutomationIntegration";
import AutomationTitle from "../components/AutomationTitle";
import AutomationQuestion from "../components/AutomationQuestion";

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
