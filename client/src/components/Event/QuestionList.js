import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Subheader from 'material-ui/Subheader'

import Question from './Question'

export default class QuestionList extends PureComponent {
  static propTypes = {
    questions: PropTypes.array,
    likeQuestion: PropTypes.func.isRequired,
    dislikeQuestion: PropTypes.func.isRequired
  }

  render() {
    const {questions, likeQuestion, dislikeQuestion} = this.props

    return (
      <div>
        <Subheader>Questions</Subheader>
        {questions &&
          questions.map(question => {
            return (
              <Question
                key={question.id}
                question={question}
                likeQuestion={likeQuestion}
                dislikeQuestion={dislikeQuestion}
              />
            )
          })}
      </div>
    )
  }
}
