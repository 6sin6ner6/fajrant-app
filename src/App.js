import React, { Component } from 'react';
import TimeToGo from "./TimeToGo"
import "./App.css";

class App extends Component {
  state = { 
    disableInput: localStorage.getItem('disableInput'),    
    chosenShift: localStorage.getItem('chosenShift'),
    showCounter: localStorage.getItem('showCounter'),
    hoursToGo: localStorage.getItem('hoursToGo'),
    minutesToGo: localStorage.getItem('minutesToGo'),
    secondsToGo: localStorage.getItem('secondsToGo'),
    endOfWork: false,
    toEarly: false,
    weekend: false,
   }

  setShift = (value) => {    
    this.setState({
      chosenShift: value,
      endOfWork: false
    })
    localStorage.setItem('chosenShift', value)
    localStorage.setItem('endOfWork', false)
   }

  setInputDisable = () => {
    this.setState({
      disableInput: true
    })
   }

  showTimeToGo = (e) => {
    e.preventDefault();
    localStorage.setItem('disableInput', true);
    localStorage.setItem('showCounter', true);
    this.setInputDisable();
    this.setState({
      showCounter:localStorage.getItem('showCounter')
    })  

    localStorage.setItem('hoursToGo',this.state.hoursToGo);
    localStorage.setItem('minutesToGo',this.state.minutesToGo);
    localStorage.setItem('secondsToGo',this.state.secondsToGo);

    if(localStorage.getItem('hoursToGo') > 8){      
      this.setState({
        toEarly:true
      })
      localStorage.setItem('toEarly',true)
      localStorage.removeItem('disableInput');
      localStorage.removeItem('showCounter');
      localStorage.removeItem('chosenShift');
      }
      
    }
    
  componentDidMount(){
    
    setInterval(() => {   
    const actualTime = new Date();
    const goHomeTime = new Date();

    if(actualTime.getDay() === 6 || actualTime.getDay() === 7){
      localStorage.removeItem('disableInput');
      localStorage.removeItem('showCounter');
      localStorage.removeItem('chosenShift');
      this.setState({
        weekend: true
      })
    }

    if(this.state.chosenShift !== null){
    goHomeTime.setHours(this.state.chosenShift);    
    goHomeTime.setMinutes(0);    
    goHomeTime.setSeconds(0);
    } else {this.setState({
      showCounter: false,
    })}

    const timeToGoHome = Date.parse(goHomeTime) - Date.parse(actualTime);  
    
    let seconds = Math.floor( (timeToGoHome/1000) % 60 );
    let minutes = Math.floor( (timeToGoHome/1000/60) % 60 );
    let hours = Math.floor( (timeToGoHome/(1000*60*60)) % 24 );
    
    
    this.setState({      
      hoursToGo:hours,
      minutesToGo:minutes,
      secondsToGo:seconds,
    })
    if(seconds < 10 && seconds > -1){
      seconds = '0' + seconds
    }
    if(this.state.secondsToGo  <= -1){      
      localStorage.removeItem('disableInput');
      localStorage.removeItem('showCounter');
      localStorage.removeItem('chosenShift');
      this.setState({
        endOfWork: true
      })
    }    
    }, 500);
  }
 
  
  render() { 
    return ( 
      <>
      <div>
        <h1>Chce do d<span></span>mu</h1>
      <form action="">
        <label><input type="radio" name="shift" value="14" disabled={this.state.disableInput} onChange={(e)=> this.setShift(e.target.value)}/>Pierwsza zmiana</label>
        <label><input type="radio" name="shift" value="22" disabled={this.state.disableInput} onChange={(e)=> this.setShift(e.target.value)}/>Druga zmiana</label>
        <button onClick={(e)=>this.showTimeToGo(e)}>Potwierdź</button>
      </form>
      {this.state.weekend ? <p>W weekend są żniwa!!</p> : this.state.toEarly ? <p>Jesteś za wcześnie</p> : this.state.endOfWork ? <p className="fajrant">Fajrant!!</p> : this.state.showCounter ? <TimeToGo hours={this.state.hoursToGo} minutes={this.state.minutesToGo} seconds={this.state.secondsToGo}/> : null}
      </div>
      </>
     );
  }
}
 
export default App;
