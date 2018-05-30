import React from "react";
//import PropTypes from "prop-types";
import Button from "./Button";

class Stopwatch extends React.Component {
    constructor(props){
        super(props);
        
        this.state= {
            runing : false,
            elapsed : 0,
            lastTick : 0
        };

        this.handlePause = this.handlePause.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    tick(){
        
        if (this.state.runing) {
            //console.log(Date.now());
            let now = Date.now();
            let diff = now - this.state.lastTick;
            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
          });
        };
    }

    handleStart(){
        this.setState({
            runing: true,
            lastTick: Date.now()
        });
    }

    handlePause(){
        this.setState({runing: false});
    }

    handleStop(){
        this.setState({
            runing: false,
            elapst: 0,
            lastTick: 0 
        });
    }

    format(milliseconds){
        let totalSeconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        //return '${minutes > 9 ? minutes : '0' + minutes}:${seconds >9 ? seconds : '0' + seconds}';
        return ''+(minutes > 9 ? minutes : '0' + minutes)+':'+(seconds > 9 ? seconds : '0' + seconds);
    }

    render(){
        let time = this.format(this.state.elapsed);

        return(
            <section className="stopwatch">
                <div className="stopwatch-time">{time}</div>
                
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