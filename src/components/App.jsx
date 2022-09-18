import { React, Component } from 'react';
import Section from './Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleIncrement =(prevState) =>{
  //   this.setState( ...prevState, {good: this.state.good +1},{bad: this.state.good +1}, {neutral: this.state.good +1})
  //   console.log(this.state);
  // }

  countTotalFeedback(){
    const { good, bad, neutral} = this.state;
    return good+bad+neutral
  }

  countPositiveFeedbackPercentage(){
    const { good, bad, neutral} = this.state;
    const PositivePercentage = Math.round(
      (good / (good + bad + neutral)) * 100
    );
    return PositivePercentage;
  }

  handleIncrement = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] +1,
      }
     })
  }

  // handleIncrement = event => {
  //   console.log(event.target.name);
  //   const { name } = event.target;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // }


  render() {
    const { good,bad,neutral} =this.state;
    const options = Object.keys(this.state)
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} setFeedback={this.handleIncrement} />

        {total > 0 ? (
            <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total ={total}
            positivePercentage ={positivePercentage}
            />
          ) : (
            <Notification massege="There is no feedback" />
          )}
      </Section>
      )
  }
}



// state = { isOpen: false };

// toggle = () => {
//   this.setState(state => ({ isOpen: !state.isOpen }));
// };

// render() {
//   const { isOpen } = this.state;
//   const { children } = this.props;

//   return (
//     <div>
//       <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && children}
//     </div>
//   );
// }
// }

// class Toggle extends Component {
//   state = { isOpen: false };

//   show = () => this.setState({ isOpen: true });

//   hide = () => this.setState({ isOpen: false });

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <>
//         <button onClick={this.show}>Show</button>
//         <button onClick={this.hide}>Hide</button>
//         {isOpen && children}
//       </>
//     );
//   }
// }