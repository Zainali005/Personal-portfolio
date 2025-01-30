import React from "react";
import Project from "./Project";
import StickerBlitz from "../../assets/stickerblitz.png";
import SehalWelfare from "../../assets/sehalwelfare.png";
import Codeertz from "../../assets/codeetz.png";
import NorthStar from "../../assets/northstart.png";
import Consultore from "../../assets/consultore.png";
import Tamara from "../../assets/tamara.png";

import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title" data-aos="zoom-in">
        Projects
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Most recent work
      </span>

      <div className="projects_container container">
        <Project
          projects={[
            {
              imageURL: StickerBlitz,
              title: "Sticker Blitz",
              demo: "https://sticker-blitz.vercel.app/",
              description: `<p>Sticker Blitz is an <strong>e-commerce platform</strong> built with the <strong>MERN stack</strong> (MongoDB, Express.js, React, and Node.js) that allows users to browse, customize, and purchase unique stickers and decals.</p>
              <ul>
                <li>🔹 <strong>Custom Sticker Creator</strong> – Users can design and preview stickers in real time.</li>
                <li>🔹 <strong>Secure Payment Integration</strong> – Integrated Stripe API for seamless payments.</li>
                <li>🔹 <strong>Real-time Order Tracking</strong> – Users can track their order status.</li>
                <li>🔹 <strong>Admin Dashboard</strong> – Manage products, orders, and users efficiently.</li>
              </ul>`,
            },
            {
              imageURL: SehalWelfare,
              title: "Sehal Welfare Foundation",
              demo: "https://sehalwelfarefoundation.com/",
              description: `<p>Sehal Welfare Foundation is a <strong>non-profit organization</strong> website designed to raise awareness and facilitate donations for social causes.</p>
              <ul>
                <li>🔹 <strong>Donation System</strong> – Secure donation processing for easy contributions.</li>
                <li>🔹 <strong>Event Management</strong> – Showcases upcoming charity events and activities.</li>
                <li>🔹 <strong>Volunteer Registration</strong> – Allows individuals to sign up and participate.</li>
                <li>🔹 <strong>Responsive UI</strong> – Optimized for all devices for a smooth user experience.</li>
              </ul>`,
            },
            {
              imageURL: Codeertz,
              title: "Codeertz Agency",
              demo: "https://codeertz.com/",
              description: `<p>Codeertz is a <strong>full-service digital agency</strong> specializing in web development, mobile app development, and digital marketing.</p>
              <ul>
                <li>🔹 <strong>Custom Web & Mobile Development</strong> – Builds high-performance web and mobile applications.</li>
                <li>🔹 <strong>SEO & Digital Marketing</strong> – Offers online marketing services to grow businesses.</li>
                <li>🔹 <strong>Client-Centric Approach</strong> – Tailored solutions for startups and enterprises.</li>
                <li>🔹 <strong>Modern Tech Stack</strong> – Utilizes React, Next.js, and Node.js for development.</li>
              </ul>`,
            },
            {
              imageURL: NorthStar,
              title: "North Star",
              demo: "https://ecommerce-omega-ecru.vercel.app/",
              description: `<p>North Star is a feature-rich <strong>e-commerce platform</strong> for selling various products online.</p>
              <ul>
                <li>🔹 <strong>User Authentication</strong> – Secure login & registration system.</li>
                <li>🔹 <strong>Product Listings</strong> – Dynamic product filtering and search functionality.</li>
                <li>🔹 <strong>Cart & Checkout System</strong> – Seamless shopping experience.</li>
                <li>🔹 <strong>Admin Panel</strong> – Manage products, orders, and customers efficiently.</li>
              </ul>`,
            },
            {
              imageURL: Consultore,
              title: "Consultore",
              demo: "https://tek-lega.vercel.app/",
              description: `<p>Consultore is a <strong>business consulting website</strong> that provides expert guidance to startups and enterprises.</p>
              <ul>
                <li>🔹 <strong>Professional Service Listings</strong> – Displays consulting services with details.</li>
                <li>🔹 <strong>Appointment Booking</strong> – Clients can schedule consultations online.</li>
                <li>🔹 <strong>Responsive & Modern Design</strong> – Ensures a professional look across all devices.</li>
                <li>🔹 <strong>SEO Optimization</strong> – Built with SEO-friendly practices for visibility.</li>
              </ul>`,
            },
            {
              imageURL: Tamara,
              title: "Tamara Research",
              demo: "https://tamararesearch.com/dashboard/",
              description: `<p>Tamara Research is an <strong>e-commerce and content platform</strong> offering academic writing and research services.</p>
              <ul>
                <li>🔹 <strong>Content Marketplace</strong> – Users can order academic papers, essays, and reports.</li>
                <li>🔹 <strong>Live Order Tracking</strong> – Clients can track their order progress in real time.</li>
                <li>🔹 <strong>Payment Integration</strong> – Supports multiple payment gateways.</li>
                <li>🔹 <strong>Multi-User Dashboard</strong> – Separate portals for customers and writers.</li>
              </ul>`,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
