const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('TROPIGALIA_E28S140bd', 'fmavie', 'Luquinha@2022', {
    dialect: 'mssql',
    repositoryMode: true,
    host: '11.3.0.3\\TPGLPHC',
});



module.exports = sequelize;