import React, { Component } from "react";
import Login from "./Components/Login";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogIn: false,
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLogIn: !prevState.isLogIn,
    }));
  }

  render(){
    const {isLogIn} = this.state;
    return(
      <div className="text-center">
      <center>
    
        {isLogIn? 
        (<div>
        <Login greeting = "Hello" name="saikrishna" />
        <p>You are logged in</p>
        <button className="btn btn-secondary" onClick={this.toggleLogin}>LOGOUT</button>
        </div>)
        :
        (<div>
        <p>You are logged out</p>
          <button className="btn btn-primary"  onClick={this.toggleLogin}>LOGIN</button>
          </div>
          )}
        </center>
      </div>
    )
  }
}

export default App;