import React from "react";
//import PropTypes from "prop-types";
import Button from "./Button";

class Stopwatch extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            runing:false
        };

        this.handlePause = this.handlePause.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    componentDidMount(){
        this.interval = setInterval(this.tick,1000);
    }

    tick(){
        console.log(Date.now());
    }

    handleStart(){
        this.setState({runing:true});
    }

    handlePause(){
        this.setState({runing:false});
    }

    handleStop(){
        this.setState({runing:false});
    }

    render(){
        return(
            <section className="stopwatch">
                <div className="stopwatch-time">00:23</div>
                
                <div className="stopwatch=contols">
                    {this.state.runing ?
                        <Button className="icon" icon="pause" onClick={this.handlePause} />
                        :
                        <Button className="icon" icon="play_arrow" onClick={this.handleStart} />    
                    }
                
                    
                    <Button className="icon" icon="stop" onClick={this.handleStop} />

                </div>
            </section>
        );
    }
}

export default Stopwatch;