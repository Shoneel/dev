// Importing necessary dependencies and styles for the Services component
import React, { useState } from "react";
import "./services.css";

// Importing the services data from the servicesData.js file
import servicesData from "./servicesData";

// Services Component
const Services = () => {
  // Using state to track the currently active service modal
  const [toggleState, setToggleState] = useState(0);

  // Function to toggle the display of service modals
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Render the Services component
  return (
    <section className="services section" id="services">
      {/* Services Title and Subtitle */}
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      {/* Services Container */}
      <div className="services__container container grid">
        {/* Mapping over the servicesData array to render each service */}
        {servicesData.map((service, index) => (
          <div className="services__content" key={index}>
            {/* Service Icon and Title */}
            <div>
              <i className={`uil ${service.icon} services__icon`}></i>
              <h3 className="services__title">{service.title}</h3>
            </div>

            {/* "View More" button to show the service modal */}
            <span
              className="services__button"
              onClick={() => toggleTab(index + 1)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            {/* Service Modal */}
            <div
              className={
                toggleState === index + 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              {/* Modal Content */}
              <div className="services__modal-content">
                {/* Close icon to hide the service modal */}
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>

                {/* Modal Title and Description */}
                <h3 className="services__modal-title">{service.title}</h3>
                <p className="services__modal-description">
                  {service.description}
                </p>

                {/* List of services offered */}
                <ul className="services__modal-services grid">
                  {service.services.map((item, subIndex) => (
                    <li className="services__modal-service" key={subIndex}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Exporting the Services component
export default Services;

// import React, { useState } from "react";
// import "./services.css";

// const Services = () => {
//   const [toggleState, setToggleState] = useState(0);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
//   return (
//     <section className="services section" id="services">
//       <h2 className="section__title">Services</h2>
//       <span className="section__subtitle">What I Offer</span>

//       <div className="services__container container grid">
//         <div className="services__content">
//           <div>
//             <i className="uil uil-arrow services__icon"></i>
//             <h3 className="services__title">
//               Web <br /> Development
//             </h3>
//           </div>

//           <span className="services__button" onClick={() => toggleTab(1)}>
//             View More
//             <i className="uil uil-arrow-right services__button-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 1
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 className="uil uil-times services__modal-close"
//                 onClick={() => toggleTab(0)}
//               ></i>
//               <h3 className="services__modal-title">Full-Stack Developer</h3>
//               <p className="services__modal-description">
//                 Crafting modern and innovative web applications for a strong
//                 online presence. Mobile-friendly and secure solutions to elevate
//                 your brand. 🚀💻
//               </p>
//               <ul className="services__modal-services grid">
//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     Responsive and modern web application development using
//                     React and JavaScript.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     Full-stack development with Node.js, Express, and MongoDB
//                     for powerful back-end solutions.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     Fast and interactive web apps using Next.js for server-side
//                     rendering and optimized performance.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     Mobile-friendly and cross-platform development for seamless
//                     user experiences.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     Secure web development with focus on data protection and
//                     authentication.
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="services__content">
//           <div>
//             <i className="uil uil-shield-check services__icon"></i>
//             <h3 className="services__title">
//               DevOps <br /> Engineering
//             </h3>
//           </div>

//           <span className="services__button " onClick={() => toggleTab(2)}>
//             View More
//             <i className="uil uil-arrow-right services__button-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 2
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 className="uil uil-times services__modal-close"
//                 onClick={() => toggleTab(0)}
//               ></i>
//               <h3 className="services__modal-title">DevOps Engineer</h3>
//               <p className="services__modal-description">
//                 Service with more than 3 years of experience.Providing quality
//                 work to clients and companies.
//               </p>
//               <ul className="services__modal-services grid">
//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     Responsive and modern web application development using
//                     React and JavaScript.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     Full-stack development with Node.js, Express, and MongoDB
//                     for powerful back-end solutions.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     Fast and interactive web apps using Next.js for server-side
//                     rendering and optimized performance.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     I develop the user interface.
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="services__content">
//           <div>
//             <i className="uil uil-edit services__icon"></i>
//             <h3 className="services__title">
//               UX/UI <br /> Designing
//             </h3>
//           </div>

//           <span className="services__button" onClick={() => toggleTab(3)}>
//             View More
//             <i className="uil uil-arrow-right services__button-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 3
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 className="uil uil-times services__modal-close"
//                 onClick={() => toggleTab(0)}
//               ></i>
//               <h3 className="services__modal-title">UX/UI Designer</h3>
//               <p className="services__modal-description">
//                 Service with more than 3 years of experience.Providing quality
//                 work to clients and companies.
//               </p>
//               <ul className="services__modal-services grid">
//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     I develop the user interface.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     I develop the user interface.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     I develop the user interface.
//                   </p>
//                 </li>

//                 <li className="services__modal-service">
//                   <i className="uil uil-check-circle services__modal-icon"></i>
//                   <p className="services__modal-info">
//                     I develop the user interface.
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
