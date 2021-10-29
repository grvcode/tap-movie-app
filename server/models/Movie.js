const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year_of_release:{ 
            type: DataTypes.INTEGER,
            allowNull: false

        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false

        }
    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        tableName: 'movies',
        schema: 'public'
    });

    return Movie;
}
