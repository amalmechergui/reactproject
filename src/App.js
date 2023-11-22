import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import  Timer from "./components/Timer";

class App extends Component {

  constructor () {
    super();
    this.state = {
      fullName: 'Mechergui Amal',
      bio: 'Born in Aindrahem in 1998',
      imgSrc: "https://cdn-icons-png.flaticon.com/512/146/146025.png",
      profession: 'Teacher',
    show: false,
  };
  }
  showProfile = () => {
    this.setState({show: !this.state.show});
  };

  render() {
    return (
      <div className="App">
        {this.state.show && (
      <Profile
       fullName={this.state.fullName} desc={`${this.state.bio} and I'm a ${this.state.profession}` } 
      ProfileImage={this.state.imgSrc}/>
      )}

      <button onClick={this.showProfile}> {this.state.show ? "Hide Profile" : "Show Profile"} </button>
    <div style={{marginTop: "70px"}}>
      <Timer />
    </div>
  </div>
    );
  }
  }






export default App ;
