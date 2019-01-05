import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      multiplier: 1,
      knowledgePoints: 0,
      dAmount: 0,
      dRate: 1,
      tAmount: 0,
      tRate: 10,
      ghAmount: 0,
      ghRate: 1.1
    };
    // this.handleClick = this.handleClick.bind(this);
    // this.handleDetermination = this.handleDetermination.bind(this)
  }

  // need 3 differents "amounts" in state
  // 4 different handleClicks

  handleClick = () => {
    this.setState({
      // count: this.state.count + 1,
      knowledgePoints:
        (this.state.knowledgePoints + this.state.dRate + this.state.tRate) *
        Math.floor(this.state.ghRate * this.state.multiplier)
    });
  };

  handleDetermination = () => {
    const { knowledgePoints, dAmount, dRate } = this.state;

    if (knowledgePoints >= 10) {
      this.setState({
        knowledgePoints: knowledgePoints - 10,
        dAmount: dAmount + 1,
        dRate: dRate + 1
      });
    } else {
      this.setState({
        message: "YOU DONT HAVE ENOUGH POINTS!"
      });
    }
  };

  handleTime = () => {
    const { knowledgePoints, tAmount, tRate } = this.state;

    if (knowledgePoints >= 100) {
      this.setState({
        knowledgePoints: knowledgePoints - 100,
        tAmount: tAmount + 1,
        tRate: tRate + 10
      });
    } else {
      this.setState({
        message: "YOU DONT HAVE ENOUGH POINTS!"
      });
    }
  };

  handleGoodHabits = () => {
    const { knowledgePoints, ghAmount, ghRate } = this.state;

    if (knowledgePoints >= 0) {
      this.setState({
        knowledgePoints: Math.floor(knowledgePoints / 2),
        multiplier: multiplier + 0.01,
        ghAmount: ghAmount + 1
      });
    } else {
      this.setState({
        message: "not enough"
      });
    }
  };

  render() {
    const {
      knowledgePoints,
      dRate,
      message,
      tRate,
      ghRate,
      dAmount,
      tAmount,
      ghAmount
    } = this.state;

    return (
      <div className="game">
        <p>Knowledge Points {knowledgePoints}</p>
        <button onClick={this.handleClick}>
          Click + {dRate + tRate + ghRate}
        </button>
        <p />
        <div className="buying-stuff">
          <button
            onClick={this.handleDetermination}
            className="determination-button"
          >
            Buy Determination
          </button>
          <li>Amount: {dAmount}</li>
          <li>Cost: 10</li>
          <li>Rate Increase: {dRate}</li>
          <button onClick={this.handleTime} className="time-button">
            Buy Time
          </button>
          <li>Amount: {tAmount}</li>
          <li>Cost: 100</li>
          <li>Rate Increase: {tRate} </li>
          <button onClick={this.handleGoodHabits} className="goodHabits-button">
            Buy Good Habits{" "}
          </button>
          <li>Amount: {ghAmount}</li>
          <li>Cost: 1/2 of Total</li>
          <li>Rate Increase: {ghRate}</li>

          <p>{message ? message : ""}</p>
        </div>
      </div>
    );
  }
}

export default Counter;
