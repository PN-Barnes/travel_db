const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection');

class Traveller extends Model {}
Traveller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1,30],
                isAlpha: true
            }
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true 
            } 
        }
    }
)

module.exports = Traveller;