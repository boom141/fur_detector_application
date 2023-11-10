import React, {Component} from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class CircularGauge extends Component{
    constructor(props){
        super(props)
        this.percentage = this.props.percentage;
    }

    render(){
        return(
            <CircularProgressbar 

                value={this.percentage} 
                text={`${this.percentage}%`}
                counterClockwise={true}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    textColor: '#FFFFFF',
                    pathTransition: 'easeIn',
                    pathTransitionDuration: 0.5,
                    pathColor: '#00D1FF'
                })}
                
                />
        )
    }
}

export default CircularGauge