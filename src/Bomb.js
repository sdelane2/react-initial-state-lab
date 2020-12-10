// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    
    constructor (props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }

    }
    
    
    
    
    render() {

        const boom = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

        return (
            <h1>
                {boom}
            </h1>
        )

        
        }
}

export default Bomb