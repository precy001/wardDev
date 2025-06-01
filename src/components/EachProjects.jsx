import React from 'react'

const EachProjects = (props) => {
  return (
      <div className="projects-card">
        <div className="projects-image">
            <img src={props.image} width={250} height={150}/>
        </div>

         <div className="team-title">
                {props.title}
            </div>

            <div className="text-desc">
                {props.text}
            </div>
    </div>
  )
}

export default EachProjects
