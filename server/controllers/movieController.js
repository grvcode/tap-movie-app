const { Op } = require("sequelize");

const { Movies } = require('../models');

const getAllMovies = async (req, res) => {
    const { searchText } = req.query;

    try {
        const conditions = searchText ? {
            where: {
                title: {
                    [Op.iRegexp]: searchText
                }
            }
        } : {};
        const movies = await Movies.findAll(conditions);
        return res.json(movies);
    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

const getMovie = async (req, res) => {
    const { movieId } = req.params;

    try {
        const movie = await Movies.findOne({
            where: {
                id: Number(movieId)
            }
        });
        if (!movie) throw new Error("Movie Not Found");
        res.json({
            message: 'Movie Found',
            movie
        });
    }
    catch (e) {
        res.status(404).json({
            message: e.message
        });
    }
}

const addMovie = async (req, res) => {
    const { title, poster, rating,year_of_release,genre } = req.body;

    try {
        const createdMovie = await Movies.create({
            title,
            poster,
            rating,
            year_of_release,
            genre,
        });
        return res.json({
            message: 'Movie Created',
            movie: createdMovie
        })
    }
    catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}


module.exports = {
    getAllMovies,
    getMovie,
    addMovie
}