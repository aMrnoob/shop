const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');

const sequelize = new Sequelize('aple', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    // dialectModule: "mysql2",
    logging: false
});

let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error){
        console.error('Unable to connect to the database: ' + error);
    }
}

module.exports = connectDB;
