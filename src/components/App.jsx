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
