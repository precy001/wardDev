import React from 'react'
import EachProjects from './EachProjects'
import Infrastucture from '../assets/images/infrastructure.jpg'
import Agriculture from '../assets/images/agriculture.jpg'
import Healthcare from '../assets/images/healthcare.jpg'
import Security from '../assets/images/security.jpeg'

const Projects = () => {
    const title1 = "Infrastructure & Rural Development."
    const title2 = "Agricultural Empowerment."
    const title3 = "Education & Healthcare Improvements."
    const title4 = "Security & Community Support."

    const text1 = "His government has launched road projects in rural wards to improve connectivity for farmers and businesses. Such as the Minna-Bida Road Construction as it is critical for economic growth. Efforts have been put in to place for the Solar-powered street lights and mini-grids which are being deployed in remote communities. Hotels have also been built due to this project. Furthermore the construction to more boreholes and water schemes have been commissioned to address scarcity. "
    const text2 = "New Niger Food Security Initiative , a  major program aimed at boosting farming productivity through mechanization, irrigation, and support for smallholder farmers. Partnerships with CBN & IFAD to provide loans, fertilizers, and improved seedlings to farmers at the ward level. Also the distribution of Tractors & Farm Inputs to rural farmers"
    const text3 = "Renovation of Schools like the  primary and secondary schools in rural wards have been upgraded.  Health Center Upgrades  have been deployed with the creation of more Primary Healthcare Centers (PHCs) are being equipped with drugs and personnel."
    const text4 = "Enhanced Security Measures provided to ensure the safety of the people of Niger State, the governor has increased support for vigilante groups and community policing.  He has also aided the Youth & Women Empowerment by investing in various areas of skills acquisition programs and grants for small businesses. "
  return (
    <div>
      <div className="about-head" id='projects'>
        Our Projects
      </div>

<center>
    <div className="brief-desc">
      We focus on impactful, community-driven projects that address real needs within our ward. From road rehabilitation and clean water access to youth programs and health outreach, each project is designed to improve lives and promote sustainable development at the grassroots level.
    </div>
</center>

      <div className="projects-container">
        <EachProjects image={Infrastucture} title={title1} text={text1}/>
        <EachProjects image={Agriculture} title={title2} text={text2}/>
        <EachProjects image={Healthcare} title={title3} text={text3}/>
        <EachProjects image={Security} title={title4} text={text4}/>
    </div>

<center>
        <div className="more-btn">
            <a href="">See More</a>
        </div>
</center>
    </div>
  )
}

export default Projects
