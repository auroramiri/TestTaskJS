import React, {Fragment} from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      oddOrEven: 'Четное',
      backgroundColor: "green"
    }
  }

  setOddOrEven = (value) => {
  if ((value)%2===0)
      {
       return (this.setState({ oddOrEven : 'Четное'}),
              this.setState({backgroundColor: 'green'}))
      }else{
        return (this.setState({ oddOrEven : 'Нечетное'}),
        this.setState({backgroundColor: 'red'}))
      }
  }
  
  

  onClickUp = () => {
    this.setState((prevState) => {
      this.setState({ counter : prevState.counter +1})
      this.setOddOrEven(this.state.counter +1)
    })
    
  };

  onClickDown = () => {
      this.setState(prevState => 
          ({counter: prevState.counter? prevState.counter-1: 0})
      )
      this.state.counter>0? this.setOddOrEven(this.state.counter -1) : this.setOddOrEven(this.state.counter)
      
  };

  onClickReset = () => {
    this.setState((prevState) => {
        this.setState({counter: prevState.counter = 0,})
        this.setOddOrEven(0)
    })
  }

  render() {
      return (
        <Fragment>
          <body style={{backgroundColor: this.state.backgroundColor, width:'960px',  margin:'0 auto'}}>
          <div>
            <h1>{this.state.counter}</h1>
            <h1>{this.state.oddOrEven}</h1>
            <button onClick={this.onClickUp}>+</button>
            <button onClick={this.onClickReset}>Reset</button>
            <button onClick={this.onClickDown}>-</button>
          </div>
          </body>
        </Fragment>
      )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
