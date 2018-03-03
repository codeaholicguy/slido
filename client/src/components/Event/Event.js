import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, CardTitle, CardText} from 'material-ui/Card'

import {format} from '../../core/utils/date'

import AskQuestion from './AskQuestion'
import QuestionList from './QuestionList'

export default class Event extends Component {
  static propTypes = {
    event: PropTypes.object,
    getEvent: PropTypes.func.isRequired,
    askQuestion: PropTypes.func.isRequired,
    likeQuestion: PropTypes.func.isRequired,
    dislikeQuestion: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    push: PropTypes.object.isRequired
  }

  async componentDidMount() {
    try {
      await this.props.getEvent(this.props.params.code)
    } catch (err) {
      this.props.push('/')
    }
  }

  render() {
    const {
      event: {name, code, startsAt, endsAt, questions},
      askQuestion,
      likeQuestion,
      dislikeQuestion
    } = this.props

    return (
      <Card>
        <CardTitle
          title={name}
          subtitle={`#${code} (${format(startsAt)} - ${format(endsAt)})`}
        />
        <CardText>
          <AskQuestion askQuestion={askQuestion} />
          <QuestionList
            questions={questions}
            likeQuestion={likeQuestion}
            dislikeQuestion={dislikeQuestion}
          />
        </CardText>
      </Card>
    )
  }
}
