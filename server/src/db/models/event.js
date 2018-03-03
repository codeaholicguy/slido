'use strict'

module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define(
    'Event',
    {
      code: {type: DataTypes.STRING, unique: true},
      name: DataTypes.STRING,
      createdBy: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      startsAt: DataTypes.DATE,
      endsAt: DataTypes.DATE
    },
    {}
  )
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.User, {foreignKey: 'createdBy'})
    Event.hasMany(models.Question, {foreignKey: 'eventId', as: 'questions'})
  }
  return Event
}
