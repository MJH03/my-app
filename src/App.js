//U6899-7808
//Styles imported from index.css
import SkillDisplay from './SkillDisplay.js' //Skills Section
import ExperienceDisplay from './ExperienceDisplay.js' //Experience Display
import UniversityDisplay from './UniversityDisplay.js'
//Creating a Personal Information Section
function BriefBiography() {
  return (
  <p style={{textIndent: 15, textAlign: "center"}}>
  Hello my name is Max Handelsman I am a dedicated student at the University of South Florida and a diligent 
  worker at Publix SuperMarkets. 
  <br/>I have worked at the company since I was sixteen years old and have grown in an ever changing world.
  Forcing me to learn to be flexible and 
  <br/>adaptabile to anything not only because of the frustrations of retail but also learning the 
  struggles brought to us by the pandemic.
  </p>
  )
}

// Adding a skills section into script using props 


const Skills =[
  {
    name: "HTML",
    proficiency: " 5 out of 10",
  },
  { 
    name: "JS",
    proficiency: " 5 out of 10"
  },
  {
    name: "Leadership",
    proficiency: " 8 out of 10"
  },
  {
    name: "Communication",
    proficiency: " 10 out of 10"
  }
]
// Create an Experience Section
const tenure = [
  {
    company: "Publix SuperMarkets:",
    title: "Customer Service Staff",
    duration: "March 2021 - Present"
  },
  {
    company: "Publix SuperMarkets:",
    title: "Cashier",
    duration: "July 2019 - March 2021"
  }
]
// create an Education Section
const education = [
  {
    college: "University of South Florida:",
    degree: "Bachelors of Science in Business Analytics and Information Systems",
    degree: "Bachelors of Science in Management",
    years: "March 2023 - December 2025"
  },
  {
    college: "Saint Petersburg College:",
    degree: "A.A.",
    years: "August 2019 - December 2022"
  }
]
export default function Resume() {
  return (
    <>
    <center>
    <h1>Maxwell Handelsman</h1>
    <h4>Phone number: 727-221-6450 
    <br/>Linkedin: <a href='https://www.linkedin.com/in/max-handelsman-07bb02296/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BDOLrkTijTCiyJqR%2FML6ItA%3D%3D'>
    Click Link
    </a>
    </h4>
    </center>
    <BriefBiography />
    <h3>Skills</h3>
    <ul><SkillDisplay Skills={Skills}/></ul>
    <h3>Experience</h3>
    <ExperienceDisplay tenure={tenure}/>
    <h3>Education</h3>
    <UniversityDisplay education={education}/>
    </>
    )
}