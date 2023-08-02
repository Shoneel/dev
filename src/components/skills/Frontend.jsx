
import React from "react";
import { groupedFrontendSkills } from "./skillsData";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        {groupedFrontendSkills.map((group, groupIndex) => (
          <div className="skills__group" key={groupIndex}>
            {group.map((skill, skillIndex) => (
              <div className="skills__data" key={skillIndex}>
                <i className="bx bxs-badge-check"></i>
                <div className="div">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;



// import React from "react";

// const Frontend = () => {
//   return (
//     <div className="skills__content">
//       <h3 className="skills__title">Frontend Developer</h3>

//       <div className="skills__box">
//         <div className="skills__group">
//           <div className="skills__data">
//             <i className="bx bxs-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">HTML</h3>
//               <span className="skills__level">Expert</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i className="bx bxs-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">CSS</h3>
//               <span className="skills__level">Expert</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i className="bx bxs-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">JavaScript</h3>
//               <span className="skills__level">Expert</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i className="bx bxs-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">React</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//         </div>

//         <div className="skills__group">
//           <div className="skills__data">
//           <i className="bx bxs-badge-check"></i>

//           <div className="div">
//             <h3 className="skills__name">Next JS</h3>
//             <span className="skills__level">Intermediate</span>
//           </div>
//         </div>

//         <div className="skills__data">
//           <i className="bx bxs-badge-check"></i>

//           <div className="div">
//             <h3 className="skills__name">React Native</h3>
//             <span className="skills__level">Intermediate</span>
//           </div>
//         </div>

//         <div className="skills__data">
//           <i className="bx bxs-badge-check"></i>

//           <div className="div">
//             <h3 className="skills__name">Flutter</h3>
//             <span className="skills__level">Basic</span>
//           </div>
//         </div>

//         <div className="skills__data">
//           <i className="bx bxs-badge-check"></i>

//           <div className="div">
//             <h3 className="skills__name">jQuery</h3>
//             <span className="skills__level">Basic</span>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Frontend;
