import React from 'react'
import AiTitle from '../components/Ai/Title'
import AiServices from '../components/Ai/OurAiMlServices'
import ImgText from "../components/BAnalytics/imgText/imgText";

function AiMl() {
  return (
    <div>
        <AiTitle/>
        <ImgText
            title="Artificial Intelligence: A Symphony of Innovation"
            text="AI and ML, a symphony of thought,
            Unleashing potential, where wonders are wrought.
            From diagnosing diseases to predicting the weather,
            Solving complex problems, together and forever."
            image="Artificial-intelligence.jpg" 
        />
        <AiServices/>
    </div>
  )
}

export default AiMl;