const {Sequelize}=require('sequelize')

const sequelize=new Sequelize(`eg`,`root`,`965636@Leb`,{
    dialect:`mysql`,
    host:`localhost`
    
})

module.exports=sequelize;
