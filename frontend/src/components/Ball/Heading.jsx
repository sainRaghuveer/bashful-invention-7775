import React from 'react'
import BouncingBall from './BouncingBall'

const Heading = () => {
  return (
    <div>
      <h1 style={{textAlign:"center", fontWeight:"bold"}}>Bouncing Ball Game</h1>
      <div>
        <BouncingBall width={1350} height={600} />
      </div>
    </div>
  )
}

export default Heading
