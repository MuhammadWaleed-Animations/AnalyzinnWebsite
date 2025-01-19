import React from "react";
import "./OurAiMlServices.css";
import BEI from "./images/nlp.webp";
import CB from "./images/ai-chatbot.webp";
import PM from "./images/predictive-analytics.jpg";
import DA from "./images/data_analyst.jpg";
import ML from "./images/machine-learning.jpg";
import CV from "./images/cv.webp"
//import { Typography} from "antd";
//const { Title, Text } = Typography;


const OurAiMlServices = () => {
  return (
    <div>
        <div className="tabs-wrapper">
          {[
            {
              img: CV,
              title: 'Computer Vision',
              description: 'Develop AI models that can analyze and understand visual data, enabling tasks like object recognition, image classification, and facial detection.',        
            },
            {
              img: BEI,
              title: 'Natural Language Processing (NLP)',
              description: 'Build applications that can understand and process human language, enabling tasks like sentiment analysis, chatbots, and machine translation.',
            },
            {
              img: PM,
              title: 'Predictive Modeling',
              description: 'Develop models that can forecast future events based on historical data, enabling applications in areas like finance, marketing, and healthcare.',        
            },
            {
              img: ML,
              title: 'Machine Learning Engineering',
              description: 'Design, implement, and deploy machine learning solutions from data acquisition and cleaning to model training and evaluation.',
            },
            {
              img: CB,
              title: 'AI-powered Chatbots',
              description: 'Create intelligent chatbots that can engage with users in a natural way, providing customer support, answering questions, and automating tasks.',
            },
            {
              img: DA,
              title: 'AI-powered Data Analysis',
              description: 'Unleash the power of your data with AI-driven insights. Discover hidden patterns, trends, and anomalies to make informed decisions.',
            },
          ].map((tab, index) => (
            <div className="tab-pane"  key={index}>
              <img src={tab.img} alt={tab.title} />
              <div className="tab-content" >
                <h3>{tab.title}</h3>
                <p>{tab.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default OurAiMlServices;
