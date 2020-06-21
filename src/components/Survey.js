// This is a survey session.
import React, { Component } from 'react';
import surveyData from './surveyData';

class Survey extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadsurveyData = () => {
    // console.log(surveyData[0].question)
    this.setState(() => {
      return {
        questions: surveyData.questions[this.state.currentQuestion].question,
        options: surveyData.questions[this.state.currentQuestion].options,
        answer: surveyData.questions[this.state.currentQuestion].answer,
      };
    });
  };

  componentDidMount() {
    this.loadsurveyData();
  }

  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    // console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: surveyData.questions[this.state.currentQuestion].question,
          options: surveyData.questions[this.state.currentQuestion].options,
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
    console.log(this.state.score);
  };
  finishHandler = () => {
    if (this.state.currentQuestion === surveyData.questions.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>Thank you for taking the survey!</h3>
        </div>
      );
    } else {

      return (
        <div className="survey">

          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion + 1}  out of ${surveyData.questions.length } remaining `}</span>
          
          {options.map(option => (
          
          <div>
            <button key={option.id} className={`ui floating message options ${myAnswer === option ? "selected" : null}`}
            onClick={() => this.checkAnswer(option)}>
            {option}
            </button>
          </div>
          ))}

          {/* //the next button */}
          {currentQuestion < surveyData.questions.length - 1 && (
            <button
            className="ui inverted button"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}>
              Next
            </button>
          )}

          {/* //adding a finish button */}
          {currentQuestion === surveyData.questions.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}

            
        </div>
      );
    }
  }
}

export default Survey;

