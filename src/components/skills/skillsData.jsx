const frontendSkills = [
  {
    name: "HTML",
    level: "Expert",
  },
  {
    name: "CSS",
    level: "Expert",
  },
  {
    name: "JavaScript",
    level: "Expert",
  },
   {
    name: "React",
    level: "Intermediate",
  },
  {
    name: "Next JS",
    level: "Intermediate",
  },
  {
    name: "React Native",
    level: "Intermediate",
  },
  {
    name: "Flutter",
    level: "Basic",
  },
  {
    name: "jQuery",
    level: "Intermediate",
  },

];

const backendSkills = [
  {
    name: "Python",
    level: "Intermediate",
  },
  {
    name: "Node JS",
    level: "Intermediate",
  },
  {
    name: "Java",
    level: "Intermediate",
  },
    {
    name: "PHP",
    level: "Intermediate",
  },
  {
    name: "SQL",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
  },
  {
    name: "Express JS",
    level: "Intermediate",
  },
  {
    name: "Nginx",
    level: "Intermediate",
  },

  // Add more backend skills here
];

const devopsSkills = [
  {
    name: "Bash",
    level: "Expert",
  },
  {
    name: "Git",
    level: "Expert",
  },
  {
    name: "Linux",
    level: "Expert",
  },
  {
    name: "AWS",
    level: "Intermediate",
  },
  {
    name: "Docker",
    level: "Intermediate",
  },
  {
    name: "Kubernetes",
    level: "Intermediate",
  },
  {
    name: "Terraform",
    level: "Intermediate",
  },
  {
    name: "Git Actions",
    level: "Expert",
  },
  // Add more devops skills here
];

// Function to group the skills into arrays of 4
function groupSkills(skills) {
    // Create an empty array to hold the groups of skills
    const groups = [];
  
    // Create an empty array to temporarily hold each group of skills
    let group = [];
  
    // Loop through each skill in the 'skills' array using forEach
    skills.forEach((skill, index) => {
      // Push the current skill into the 'group' array
      group.push(skill);
  
      // Check if the current index is a multiple of 4 or if it's the last skill in the 'skills' array
      if ((index + 1) % 4 === 0 || index === skills.length - 1) {
        // If the condition is met, it means we have collected 4 skills or we have reached the end of the 'skills' array
        // So, push the 'group' array (containing the collected skills) into the 'groups' array
        groups.push(group);
  
        // Reset the 'group' array to be empty so that we can start collecting the next set of 4 skills
        group = [];
      }
    });
  
    // Return the array of skill groups
    return groups;
  }
  
export const groupedFrontendSkills = groupSkills(frontendSkills);
export const groupedDevopsSkills = groupSkills(devopsSkills);
export const groupedBackendSkills = groupSkills(backendSkills);
export { frontendSkills, backendSkills, devopsSkills };
