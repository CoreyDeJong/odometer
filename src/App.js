import React from "react";
import "./App.css";

function Header(prop) {
  return (
    <footer>
      <h1>Welcome to the WonkaBoat</h1>
      <span>{prop.message}</span>
    </footer>
  );
}

function Footer(props) {
  return (
    <footer>
      <span>{props.message}</span>
      <h6>Ima Foot Right Here</h6>
    </footer>
  );
}


export default function App() {
  return (
    <>
      <main>
      <Header message="---------------------------------------------------------------------------------------------------" />
        <div className="App">
          <h1>How far is the river going?</h1>
        </div>
        <MileCounter/>
      </main>
      <Footer message="------------------------------------------" />
    </>
  );
}

class MileCounter extends React.Component {
  
  constructor() {
    super();
    this.state = {
      mile : 0,
    }
  }
  
    zeroPad(num) {
      while (num>9999){
        num = num-10000
      }
      return String(num).padStart(4,'0')
    }



    changemile(change) {

      let newmile = this.state.mile;

      if (change === '1 mile') {
        newmile += 1
      }
      if (change === '10 mile') {
        newmile += 10
      }
      if (change === '100 mile') {
        newmile += 100
      }
      if (change === '1000 mile') {
        newmile += 1000
      }

      this.setState({
        mile : newmile,
      });
    }

    render() {
        return (
            <>
            <button onClick={() => this.changemile("1 mile")}>1 mile</button>
            <button onClick={() => this.changemile("10 mile")}>10 mile</button>
            <button onClick={() => this.changemile("100 mile")}>100 mile</button>
            <button onClick={() => this.changemile("1000 mile")}>1000 mile</button>
            <h2>Mile Counter is... {this.zeroPad(this.state.mile)}</h2>
            </>
        )
    }

}