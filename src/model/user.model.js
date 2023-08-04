const { DataTypes, Model } = require('sequelize')
const database = require('../database')
const bcrypt = require('bcrypt')

class User extends Model {}

User.init(
    {

	username:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
	password:{
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
        sequelize: database,
        tableName: 'user'
    }
)

User.beforeCreate((usuario, option) => {
    return bcrypt.hash(usuario.password, 10)
        .then(hash => {
            usuario.password = hash
        })
        .catch(err => {
            console.log("No password")
        })
})
module.exports = User;

