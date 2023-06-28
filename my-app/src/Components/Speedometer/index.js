import {Component} from "react";
import "./index.css"

class Speedometer extends Component {
  state = {count: 0}
  increament = () => {
    this.setState((prevState) =>({
      count: prevState.count + 10
    }))
  }
  decreament = () => {
    this.setState((prevState) => ({
      count: prevState.count - 10
    }))
  }
  render(){
    const {count} = this.state
    return(
      <div className="background-image">
      <div>
        <h1>SPEEDOMETER</h1>
      </div>
      <div>
          <h1>speed is {count}</h1>
          <br/>
          <p>Min limit is 0hpm, Max limit is 200hpm</p>
          <button className="btn btn-primary" onClick={this.increament}>Acceleter</button>
          {"    "}
          <button className="btn btn-primary" onClick={this.decreament}>Applay Breaks</button>
      </div>
      </div>
    )
  }
}

export default Speedometer;