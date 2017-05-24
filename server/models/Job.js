"use strict";

module.exports = function(sequelize, DataTypes) {
    var Ad = sequelize.define("Job", {
        Title: {
            type: DataTypes.STRING,
            field: 'title',
            allowNull: false
        },
        MarketPrice: {
            type: DataTypes.DECIMAL,
            field: 'market_price',
            allowNull: true
        },
        SellingPrice: {
            type: DataTypes.DECIMAL,
            field: 'selling_price',
            allowNull: false
        },
        Negotiable: {
            type: DataTypes.BOOLEAN,
            field: 'negotiable',
            allowNull: false
        },
        Condition:  {
            type: DataTypes.STRING,
            field: 'condition',
            allowNull: false
        },
        Description:  {
            type: DataTypes.STRING,
            field: 'description',
            allowNull: false
        },
        State:  {
            type: DataTypes.STRING,
            field: 'state',
            allowNull: false
        },
        Currency: {
            type: DataTypes.CHAR,
            field: 'currency',
            allowNull: false,
            defaultValue: 'N'
        },
        ModifiedOn: {
            type: DataTypes.DATE, 
            field: "modified_on", 
            allowNull: true
        },
        CreatedOn: {
            type: DataTypes.DATE, 
            field: "created_on", 
            allowNull: false,
            defaultValue: sequelize.fn('NOW')
        },
        Featured: {
            type: DataTypes.BOOLEAN, 
            field: "featured_ad", 
            allowNull: false,
            defaultValue: false
        },
        Active: {
            type: DataTypes.BOOLEAN, 
            field: "active", 
            allowNull: false,
            defaultValue: true
        }
    }, {
        classMethods: {
            associate: function(models) {
                Job.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Job.belongsTo(models.Category, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Job.belongsTo(models.CategoryItem, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                }),
                Job.hasMany(models.AdItem)
            }
        }
    });

    return Job;
};