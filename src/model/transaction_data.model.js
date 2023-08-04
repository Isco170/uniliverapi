const { DataTypes, Model } = require('sequelize')
const database = require('../database')

class Transaction_data extends Model {}

Transaction_data.init(
    {

	trans_stamp:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
	week:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
	date:{
        type: DataTypes.DATE,
        allowNull: false
    },
	doc_no:{
        type: DataTypes.STRING,
        allowNull: false
    },
	customer_number:{
        type: DataTypes.STRING,
        allowNull: false
    },
	customer_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
	brand:{
        type: DataTypes.STRING,
        allowNull: false
    },
	province:{
        type: DataTypes.STRING,
        allowNull: false
    },
	sales_rep_code:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
	Sales_rep_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
	Product_Code:{
        type: DataTypes.STRING,
        allowNull: false
    },
	line_id:{
        type: DataTypes.STRING,
        allowNull: false
    },
	lote:{
        type: DataTypes.STRING,
        allowNull: false
    },
	product_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
	success_rate:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Order_Quantity_Unit:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_Quantity_Unit:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_Quantity_Case:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_Quantity_Ton:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_Price_Unit:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_discount_percentage:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_Amount_Untaxed:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_Tax_percentage:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_Tax_Amount:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
	Sales_Total:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
    }, {
        sequelize: database,
        tableName: 'transactin_data'
    }
)

module.exports = Transaction_data;