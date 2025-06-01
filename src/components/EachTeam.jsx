import React from 'react'

const EachTeam = (props) => {
  return (
    <div>
      <div className="container">
        <div className="image">
            <img src={props.image} width={300} />
            <div className="team-title">
                {props.title}
            </div>

            <div className="text-desc">
                {props.text}
            </div>
        </div>
      </div>
    </div>
  )
}

export default EachTeam
