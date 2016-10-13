'use strict';

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  })
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



