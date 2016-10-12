'use strict';
module.exports = function(sequelize, DataTypes) {
	var burger = sequelize.define('burger', {
    burger: DataTypes.STRING
  	}, {
    classMethods: {
      associate: function(models) {
        // Notice: the Fandom "Belongs to Many" Users
        //burger.belongsToMany(models.burger, {through: 'UserFandom'});
      }
    }
  });
  return burger;
};
