// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger  extends React.Component{

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    changeBitrate = () =>{
        this.setState(prevState => ({
            settings: {                   // object that we want to update
                ...prevState.settings,    // keep all other key-value pairs
                bitrate: 12       // update the value of specific key
            }
        }))
    }

    changeRes = () =>{
        this.setState(oldState=>({
            settings:{
                    ...oldState.settings,
                    video:{
                    resolution: "720p"
                    }  
            }
        }))
    }


    render(){
        return(
            <div>
                <button onClick={this.changeBitrate} className="bitrate">{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.changeRes}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

// Create a button with the class 'bitrate'. Clicking this 
// button changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. 
// Clicking this button changes the settings.video.resolution state property to '720p'.