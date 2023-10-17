// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Siddhant",
  middleName: "",
  lastName: "Kar",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/siddhantkar",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/siddhant.kar.98",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/siddhantkar9/",
    },
    {
      image: "fa-linkedin",
      url: "https://in.linkedin.com/in/siddhant-kar-1b13b71b4",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/siddhantkar.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/siddhantkar.jpg"),
  imageSize: 375,
  message:
    "My name is Siddhant Kar. I’m a graduate of 2020 from IIT Kanpur with a degree in Computer Science & Engineering. I'm broadly interested in cybersecurity and cryptography. In my free time, I like to read and play the piano.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Projects",
  gitHubUsername: "siddhantkar", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Piano-LED-Visualizer"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Gallery",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/kochi.jpg"), 
      label: "", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/fuji.jpg"), 
      label: "", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"680",
    height:"512"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you want to say hi, please feel free to email me at",
  email: "siddhantkar2020@iitkalumni.org",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
