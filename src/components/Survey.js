// This is a survey session.
import React, { Component } from 'react';
import surveyData from './surveyData';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { NavLink } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
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
        <div className="result" color="#00494A">
          <h3>Thank you for taking the survey!</h3>
          <Button>
            <NavLink to="/journal" exact>
              Let's go write your first journal~
            </NavLink>
          </Button>
        </div>
      );
    } else {

      return (

        <Container>
        <Card>
        <ThemeProvider theme={theme}>
          <div classname="survey" color="#00494A">
            <p className="questions-remaining">{`Question ${currentQuestion + 1}  out of ${surveyData.questions.length }`}</p>
            <h4 className="survey-title">Mental Health Survey</h4>
            <light><h5 className="survey-question">{this.state.questions} </h5></light>

          <div>
          {options.map(option => (
          <span display="inline" style={{margin: '1.5rem 2rem'}}>
            <Button variant="contained" color="secondary" key={option.id} className={`answer-button ${myAnswer === option ? "selected" : null}`}
            onClick={() => this.checkAnswer(option)}>
            {option}
            </Button>
          </span>
          ))}
          </div>

          {/* //the next button */}
          {currentQuestion < surveyData.questions.length - 1 && (
            <Button
            variant="contained"
            className="next-button"
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
        </div>
        </ThemeProvider>
        </Card>
        </Container>
      );
    }
  }
}

export default Survey;
