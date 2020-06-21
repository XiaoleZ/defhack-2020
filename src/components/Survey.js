// This is a survey session.
import React, { Component } from 'react';
import surveyData from './surveyData';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { NavLink } from "react-router-dom";
import "./custom.css";

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
          <Button>
            <NavLink to="/journal" exact>
              Let's write the first journal
            </NavLink>
          </Button>
        </div>
      );
    } else {

      return (

        <Container>
        <Typography component="h1" variant="h5">Let's do a quick survey!</Typography>
        <Card className="survey">
          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion + 1}  out of ${surveyData.questions.length } remaining `}</span>
          
          {options.map(option => (
          
          <div>
            <Button key={option.id} className={`ui floating message options ${myAnswer === option ? "selected" : null}`}
            onClick={() => this.checkAnswer(option)}>
            {option}
            </Button>
          </div>
          ))}

          {/* //the next button */}
          {currentQuestion < surveyData.questions.length - 1 && (
            <Button
            variant="contained"
            color="primary"
            className="ui inverted button"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}>
              Next
            </Button>
          )}

          {/* //adding a finish button */}
          {currentQuestion === surveyData.questions.length - 1 && (
            <Button className="ui inverted button" onClick={this.finishHandler} color="primary" variant="contained">
              Finish
            </Button>
          )}        
        </Card>
        </Container>
      );
    }
  }
}

export default Survey;

