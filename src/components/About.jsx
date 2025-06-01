import React from 'react'
import governor from '../assets/images/governor.jpg'

const About = () => {
  return (
    <div>
      <div className="about-head" id='about'>
        About Us
      </div>

      <div className="about-content">

        <div className="title-head">
            INTRODUCING THE GOVERNOR
            <hr className="hr" />
        </div>
            <div className="gov-section">
                <div className="gov-img">
                    <img src={governor} width={432} />
                </div>

                <div className="gov-intro">
                    Governor Mohammed Umaru Bago has reintroduced the program, demonstrating a renewed commitment to grassroots development and learning from past challenges.
                    As of 2024, the Governor of Niger State is Hon. Mohammed Umar Bago, who took office on May 29, 2023, under the All Progressives Congress (APC). Since assuming office, Governor Bago has prioritized grassroots development, particularly in rural and underserved wards across Niger State.  
                    Governor Bago has  also mandated local government chairmen to prioritize ward-based projects working with state and federal lawmakers to ensure development reaches grassroots communities.  
                    He has also administered Afforestation and climate-resilient projects in wards.  

                </div>
            </div>


            <div className="title-head media">
                SCOPE
                <hr className="hr" />
            </div>
            <div className="scope">
                The projects are locally driven and identified by community leaders and residents based on their specific needs. A thorough needs assessment is expected from each ward to determine their specific requirements across various sectors.
                Needs such as :<br />
                Boreholes (for water supply) <br />
                Primary Health Care centers<br />
                Schools (new construction or renovation)<br />
                Sanitation facilities<br />
                Security infrastructure<br />
                Other essential infrastructure tailored to community requirements.<br />
            </div>

            <div className="title-head aim-of">
                AIMS OF NIGER WARD DEVLOPMENT PROJECT
                <hr className="hrlong" />
            </div>

            <div className="aim">
                <div className="the-text">
                <b><li>Accelerating Grassroots Development: </li></b>
                The primary goal is to bring tangible development projects directly to the communities at the ward level.<br />
                <b><li>Community Empowerment and Ownership:</li></b>
                 The project aims to empower communities to identify their own needs and priorities, and to manage and supervise the execution of projects.<br />
                <b><li>Transparency and Accountability:</li></b>
                 A strong emphasis is placed on ensuring transparency in fund utilization and accountability in project execution.<br />
                <b><li>Alleviating Suffering and Boosting Socio-economic Growth:</li></b>
                 By providing functional infrastructure like boreholes, primary healthcare centers, and schools, the project intends to improve living conditions, boost productivity, and foster socio-economic growth, particularly for vulnerable groups like women.
                </div>
            </div>

            <div className="title-head aim-of">
                FUNDING OF AND DISBURSEMENT TOWARDS THE PROJECT
                <hr className="hrlong" />
            </div>

            <div className="more">
                 The Niger State government has allocated a significant annual budget of N9.864 billion for the Ward Development Project. Therefore, this project allocate funds for each of the 274 political wards across the state's 25 local government areas which receives N3 million monthly for project implementation. As of May 2025, N822 million has been disbursed to the 274 wards, representing the initial N3 million allocation per ward.
                The allocation is considered a baseline, and other interwoven agencies like local government area councils, SUBEB (State Universal Basic Education Board), healthcare centers, and Ministries of Environment and Education are also expected to execute projects domiciled in wards, ensuring a synchronized approach to development.

            </div>
      </div>
    </div>
  )
}

export default About
