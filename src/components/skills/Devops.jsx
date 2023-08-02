import React from "react";
import { groupedDevopsSkills } from "./skillsData";

const Devops = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">DevOps Engineer</h3>

      <div className="skills__box">
        {groupedDevopsSkills.map((group, groupIndex) => (
          <div className="skills__group" key={groupIndex}>
            {group.map((skill, skillIndex) => (
              <div className="skills__data" key={skillIndex}>
                <i className="bx bx-badge-check"></i>
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

export default Devops;




// import React from "react";

// const Devops = () => {
//   return (
//     <div className="skills__content">
//       <h3 className="skills__title">DevOps Engineer</h3>

//       <div className="skills__box">
//         <div className="skills__group">
//           <div className="skills__data">
//             <i className="bx bx-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">Bash</h3>
//               <span className="skills__level">Expert</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i className="bx bx-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">Git</h3>
//               <span className="skills__level">Expert</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i className="bx bx-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">Linux</h3>
//               <span className="skills__level">Expert</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i className="bx bx-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">AWS</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//         </div>

//         <div className="skills__group">
//           <div className="skills__data">
//             <i className="bx bx-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">Docker</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i className="bx bx-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">Kubernetes</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i className="bx bx-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">Terraform</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i className="bx bx-badge-check"></i>

//             <div className="div">
//               <h3 className="skills__name">Git Actions</h3>
//               <span className="skills__level">Expert</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Devops;
