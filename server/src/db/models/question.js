'use strict'

module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define(
    'Question',
    {
      content: DataTypes.STRING,
      eventId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Event',
          key: 'id'
        }
      },
      isHighlight: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      like: {type: DataTypes.INTEGER, defaultValue: 0},
      dislike: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {}
  )
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsTo(models.Event, {foreignKey: 'eventId'})
  }
  return Question
}
