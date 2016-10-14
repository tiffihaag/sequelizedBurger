'use strict';

module.exports = function(sequelize, DataTypes) {
 var burgers = sequelize.define("burgers", {
   name: DataTypes.STRING,
   devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
 });
 return burgers;
};

  // }, {
  //   classMethods: {
  //     associate: function(models) {
  //       Burger.belongsTo(models.Burger, {
  //         onDelete: "CASCADE",
  //         foreignKey: {
  //           allowNull: false
  //         }
  //       })
  //     }
  //   }
  // })
//module.exports = router;



