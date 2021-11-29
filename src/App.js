import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
    totalCountScore:0
  };

  updateTotalScores = (i,id)=>{
    let totalCountScore = 0;
    const counters = this.state.counters.filter(c => c.id !== id);
    if(counters.length ===0){
      this.setState({totalCountScore:0})
    }
    for(let item of counters){
      totalCountScore+= item.value
      this.setState({totalCountScore: totalCountScore+i})
  }}

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    this.updateTotalScores(1);
  };

  handleDecrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value?(counters[index].value --,this.updateTotalScores(-1)):this.updateTotalScores(0);
    this.setState({ counters });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    for(let item of counters){
      if(item.value%2===0){
        item.value += 1;
      } 
    }
    let id = Math.random().toString(36).toString(7)
    counters.push({id: id, value:0})
    this.setState({counters});
    this.updateTotalScores(0); 
  }

  handleReset = counter=>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    let value = counters[index].value;
    counters[index].value =0;
    this.setState({ counters });
    this.updateTotalScores(-value);
  }

  handleDeleteAll = () => {
    let counters =[...this.state.counters]
    counters.splice(0,this.state.counters.length)
    this.setState({counters:counters, totalCountScore:0});
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    for(let item of counters){
      if(item.value%2!==0){
        item.value -= 1;
      }
  };
    this.setState({ counters });
    this.updateTotalScores(0,counterId);
    }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.length}
          totalCountersScore={this.state.totalCountScore}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDeleteAll={this.handleDeleteAll}
            onAdd = {this.handleAdd.bind(this)}
            onIncrement={this.handleIncrement}
            onReset = {this.handleReset}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
