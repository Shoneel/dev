
import React from "react";
import { groupedBackendSkills } from "./skillsData";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        {groupedBackendSkills.map((group, groupIndex) => (
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

export default Backend;





// import React from 'react'

// const Backend = () => {
//   return (
//     <div className="skills__content">
//     <h3 className="skills__title">Backend Developer</h3>

//     <div className="skills__box">
//       <div className="skills__group">
//         <div className="skills__data">
//           <i className="bx bxs-badge-check"></i>

//           <div className="div">
//             <h3 className="skills__name">Python</h3>
//             <span className="skills__level">Intermediate</span>
//           </div>
//         </div>

//         <div className="skills__data">
//           <i className="bx bxs-badge-check"></i>

//           <div className="div">
//             <h3 className="skills__name">Node Js</h3>
//             <span className="skills__level">Intermediate</span>
//           </div>
//         </div>

//         <div className="skills__data">
//           <i className="bx bxs-badge-check"></i>

//           <div className="div">
//             <h3 className="skills__name">Java</h3>
//             <span className="skills__level">Intermediate</span>
//           </div>
//         </div>

//         <div className="skills__data">
//           <i className="bx bxs-badge-check"></i>

//           <div className="div">
//             <h3 className="skills__name">PHP</h3>
//             <span className="skills__level">Intermediate</span>
//           </div>
//         </div>
//       </div>

//       <div className="skills__group">
//          <div className="skills__data">
//         <i className="bx bxs-badge-check"></i>

//         <div className="div">
//           <h3 className="skills__name">MySQL</h3>
//           <span className="skills__level">Intermediate</span>
//         </div>
//       </div>

//       <div className="skills__data">
//         <i className="bx bxs-badge-check"></i>

//         <div className="div">
//           <h3 className="skills__name">MongoDB</h3>
//           <span className="skills__level">Basic</span>
//         </div>
//       </div>

//       <div className="skills__data">
//         <i className="bx bxs-badge-check"></i>

//         <div className="div">
//           <h3 className="skills__name">Firebase</h3>
//           <span className="skills__level">Basic</span>
//         </div>
//       </div>

//       <div className="skills__data">
//         <i className="bx bxs-badge-check"></i>

//         <div className="div">
//           <h3 className="skills__name">Nginx</h3>
//           <span className="skills__level">Basic</span>
//         </div>
//       </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Backend