import React from 'react'
import EachTeam from './EachTeam'
import team1 from '../assets/images/team1.jpg'
import team2 from '../assets/images/team2.jpg'
import team3 from '../assets/images/team3.jpg'

const Theteam = () => {

    const head1 = "The State Steering Committee:";
    const head2 = "The Local Government Development Committees: ";
    const head3 = "Ward Development Committees: ";

    const text2 = "These committees are established by the State Steering Committee and are responsible for further establishing committees at the ward level."

    const text1 = "Headed by the Commissioner for Rural and Community Development, Phallalu Bako Mohammed, this committee is responsible for overall oversight, sensitization, and ensuring the project's objectives are met. Dr. Yakubu Mohammed serves as the secretary."

    const text3 = "Comprising representatives from traditional, religious, political, and civil society groups, these committees are crucial for managing funds, supervising project execution, and ensuring community participation in project identification and implementation. The composition of these committees can vary by ward to accommodate critical stakeholders."
  return (
    <div>
      <div className="about-head the-team-head" id='theteam'>
            Meet the Team
      </div>

<center>
      <div className="brief-desc">
        Our team is made up of passionate leaders, dedicated volunteers, and community advocates working together to drive positive change in our ward. With diverse backgrounds and a shared commitment to service, we collaborate to plan, execute, and sustain development initiatives that matter to the people.
      </div>
</center>
       <div className="team-container">
                <EachTeam image={team1} title={head1} text={text1}/>
                <EachTeam image={team2} title={head2} text={text2}/>
                <EachTeam image={team3} title={head3} text={text3}/>
        </div>
    </div>
  )
}

export default Theteam
