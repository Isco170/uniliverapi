const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('uniliver_db', 'root', '', {
//     repositoryMode: true,
//     host: 'localhost',
//     dialect: 'mysql'
// });

const sequelize = new Sequelize('UnileverAPI', 'admin', 'Tr0p1g4l1a', {
    repositoryMode: true,
    host: 'unilever-api.cdiz94kaxgxm.af-south-1.rds.amazonaws.com',
    // port: 3306,
    dialect: 'mysql'
});



module.exports = sequelize;