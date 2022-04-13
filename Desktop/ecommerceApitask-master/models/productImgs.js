const {Sequelize} = require('sequelize');

const sequelize = require('../util/database');

const ProductImg = sequelize.define('productImg', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  imgUrl: Sequelize.STRING
});
module.exports =ProductImg;
