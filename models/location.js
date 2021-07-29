const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection');

class Location extends Model {} 
Location.init(
    {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1,30],
                isAlpha: true
            }
        }
    }
)