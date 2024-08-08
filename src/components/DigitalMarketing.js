import React from "react";
import "./DigitalMarketing.css"; // Updated CSS file

const MarketingTabs = () => {
  return (
    <div className="tabs-container">
      <div className="marketing-header">
        <h1>Dive In</h1>
        <h2>Digital Marketing Analytics</h2>
        <p>
          We support leaders to EVOLVE their organizations using our proven
          Digital marketing analyzinn services – helping you achieve a
          competitive advantage with actionable insights.
        </p>
        <br />
        <button className="consultation-button">Free Consultation Today</button>
      </div>
      <div className="new-section" id="our-services">
        <h2 style={{ fontSize: "3em" }}>Services</h2>
        <p className="italic-text">
          Are your digital marketing goals driven by data, or just a shot in the
          dark? Either way, ANALYZINN can help to gain competitive advantage by
          providing you the right knowledge, at the right time, so you can:
        </p>
        <ul>
          <li>
            Understand your customers & offer Superior Customer Experience
          </li>
          <li>Identify opportunities and threats & Market Better</li>
          <li>Respond to business needs proactively</li>
          <li>Innovate faster with relevant data</li>
          <li>
            Gain competitive advantage & make informed and optimized decision
          </li>
        </ul>
      </div>
      <div className="tabs-wrapper">
        <div className="tab-pane">
          <img
            src="https://infinitemediaresources.com/wp-content/uploads/2020/03/what-is-website-marketing.png"
            alt="Website Marketing"
          />
          <div className="tab-content">
            <h3>Website Marketing</h3>
            <p>
              Optimize and promote your website to attract visitors and convert
              them into customers.
            </p>
          </div>
        </div>
        <div className="tab-pane">
          <img
            src="https://fironmarketing.com/wp-content/uploads/2023/03/seo.jpeg"
            alt="SEO"
          />
          <div className="tab-content">
            <h3>SEO</h3>
            <p>
              Improve your website's ranking on search engines to increase
              organic traffic.
            </p>
          </div>
        </div>
        <div className="tab-pane">
          <img
            src="https://lobsterdigitalmarketing.co.uk/wp-content/uploads/2022/07/AdobeStock_389328016_Editorial_Use_Only-scaled.jpeg"
            alt="Social Media Marketing"
          />
          <div className="tab-content">
            <h3>Social Media Marketing</h3>
            <p>
              Promote your brand on social media platforms to engage with your
              audience.
            </p>
          </div>
        </div>
        <div className="tab-pane">
          <img
            src="https://www.launch-marketing.com/wp-content/uploads/2023/06/GettyImages-1251358514-scaled.jpg"
            alt="PPC Marketing"
          />
          <div className="tab-content">
            <h3>PPC Marketing</h3>
            <p>
              Run paid ads to quickly reach potential customers and generate
              leads.
            </p>
          </div>
        </div>
        <div className="tab-pane">
          <img
            src="https://mikekhorev.com/wp-content/uploads/2019/12/content-marketing.jpg"
            alt="Content Marketing"
          />
          <div className="tab-content">
            <h3>Content Marketing</h3>
            <p>
              Create and share valuable content to attract and engage your
              audience.
            </p>
          </div>
        </div>
        <div className="tab-pane">
          <img
            src="https://www.sur.co.uk/wp-content/uploads/2023/03/Is-Email-Marketing-Still-Effective.png"
            alt="Email Marketing"
          />
          <div className="tab-content">
            <h3>Email Marketing</h3>
            <p>
              Send targeted emails to nurture leads and build customer
              relationships.
            </p>
          </div>
        </div>
        <div className="tab-pane">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*DPQlRQg7ZJVd0-3bvTAOHQ.jpeg"
            alt="Affiliate Marketing"
          />
          <div className="tab-content">
            <h3>Affiliate Marketing</h3>
            <p>
              Partner with affiliates to expand your reach and increase sales.
            </p>
          </div>
        </div>
        <div className="tab-pane">
          <img
            src="https://www-cms.pipedriveassets.com/blog-assets/video-marketing.png"
            alt="Video Marketing"
          />
          <div className="tab-content">
            <h3>Video Marketing</h3>
            <p>
              Use videos to promote your brand and products, and engage your
              audience.
            </p>
          </div>
        </div>
        <div className="additional-section">
          <h2>How can you access our Digital Marketing Strategies?</h2>
          <p>
            Analyzinn will provide you the additional stack for accessing our
            Digital Marketing Strategies:
          </p>
          <ul>
            <li>Marketing Analytics Dashboards</li>
            <li>Revenue Dashboards</li>
            <li>Customer Level Dashboards</li>
            <li>Campaign Level Dashboards</li>
          </ul>
          <p>
            These dashboards will help you to access your leads, revenue,
            customers, campaigns, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingTabs;
