import React from 'react'
import "./App.scss";
import logo from './logo.svg';

import { Login, Register } from './component/login/index'
import { Menu } from './component/header/navbar'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    }
  }
  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      {/** changes class name */}
      this.RightSide.classList.remove("right");
      this.RightSide.classList.add("left");
    }
    else {
      this.RightSide.classList.remove("left");
      this.RightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }))
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login"

    return (
      <div>
        <div className="header">
         <Menu />
        </div>
        <div className="App">
          <div className="login">
            <div className="container">

              {isLogginActive && <Login containerRef={(ref) => this.current = ref} />}
              {!isLogginActive && <Register containerRef={(ref) => this.current = ref} />}
            </div>
            <RightSide current={current} containerRef={(ref) => this.RightSide = ref} onClick={this.changeState.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

const RightSide = props => {
  return (<div className="right-side" ref={props.containerRef} onClick={props.onClick} >
    <div className="inner-container">
      <div className="text">{props.current}</div>
    </div>
  </div>
  )
}
export default App;
