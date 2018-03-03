import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import {format} from '../../core/utils/date'

export default class Question extends PureComponent {
  static propTypes = {
    question: PropTypes.object,
    likeQuestion: PropTypes.func.isRequired,
    dislikeQuestion: PropTypes.func.isRequired
  }

  _like = () => {
    this.props.likeQuestion(this.props.question.id)
  }

  _dislike = () => {
    this.props.dislikeQuestion(this.props.question.id)
  }

  render() {
    const {question: {content, createdAt, like, dislike}} = this.props

    return (
      <Card>
        <CardHeader title="Anonymous" subtitle={format(createdAt)} />
        <CardText>{content}</CardText>
        <CardActions>
          <FlatButton label={`${like} Like`} onClick={this._like} />
          <FlatButton label={`${dislike} Dislike`} onClick={this._dislike} />
        </CardActions>
      </Card>
    )
  }
}
