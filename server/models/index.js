const Sequelize=require("sequelize");
require("dotenv").config();

const PG_URI=process.env.PG_URI;
const sequelize=new Sequelize(PG_URI,{
    dialect:"postgres",

});


const db={};
db.Sequelize= Sequelize;
db.Sequelize= sequelize;

//danger : to be used only for the first time in order  table creation
//  sequelize.sync({ force: true })
//     .then(() => console.log("Tables created!"));

db.Movies=require("./Movie.js")(sequelize,Sequelize);

module.exports=db;
