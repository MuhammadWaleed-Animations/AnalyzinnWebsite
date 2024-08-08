import React from "react";
import "./footer.css";
import { Layout } from "antd";
const { Footer } = Layout;

const footer = () => {
  return (
    <Footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Guaranteed Satisfaction. Everytime!</h3>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/Bussiness-analytics">Business Analytics</a>
            </li>
            <li>
              <a href="/DigitalMarketing">Digital Marketing</a>
            </li>
            <li>
              <a href="/Automation">Automation & Integration</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/analyzinn/">Careers</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <p>13th Street, Lubbock, Texas, United States.</p>
          <p>
            <a href="mailto:admin@analyzinn.com">admin@analyzinn.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Analyzinn</p>
      </div>
    </Footer>
  );
};

export default footer;

<div className="footer-section">
  <h3>Guaranteed Satisfaction. Everytime!</h3>
</div>;

// const footer =()=>{
//     return <Footer
//         style={{
//           textAlign: 'center',
//         }}
//       >
//         Analyzinn Solutions @2019 Created in US
//       </Footer>
// }
// export default footer
