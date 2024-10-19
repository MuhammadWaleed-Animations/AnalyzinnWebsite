import React from 'react'
import AppTitle from "../components/AppDev/Title"
import Description from "../components/AppDev/AppDevServiceDescription"
import OurServices from "../components/AppDev/OurAppDevelopmentServices"
import Questions from "../components/AppDev/AppDevQuestions"

function AppDev() {
  return (
    <div>
      <AppTitle />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Description />
      <OurServices />
      <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Questions />
      </div>
      </div>
    </div>
  )
}

export default AppDev;
