'use strict'

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      email: {type: DataTypes.STRING, unique: true},
      password: DataTypes.STRING,
      fullName: DataTypes.STRING
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Event, {foreignKey: 'createdBy', as: 'events'})
  }
  return User
}
