"use strict";

module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        Title: {
            type: DataTypes.STRING,
            field: 'title',
            allowNull: false
        },
        JobSpecification: {
            type: DataTypes.TEXT,
            field: 'job_specification',
            allowNull: false
        },
        JobLocation: {
            type: DataTypes.STRING,
            field: 'job_specification',
            allowNull: false
        },
        OfferRelocation: {
            type: DataTypes.BOOLEAN,
            field: 'offer_relocation',
            allowNull: false,
            defaultValue: false
        },
        JobType: {
            type: DataTypes.STRING,
            field: 'job_type',
            allowNull: false,
            defaultValue: 'Permanent'
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
        FeaturedJob: {
            type: DataTypes.BOOLEAN, 
            field: "featured_job", 
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
                Job.belongsTo(models.Employer, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        }
    });

    return Job;
};