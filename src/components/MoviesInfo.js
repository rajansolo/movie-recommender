import React, { Component } from 'react';
import '../css/movieInfo.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchMovie, loading } from '../redux/actioncreator';

const mapStateToProps = state => ({
    film : state.movies.movie,
})

class MoviesInfo extends Component {

    componentDidMount = () =>{
        fetchMovie();
    }

    searchMovie = (okay) => {
        this.props.fetchMovie(okay);
        this.props.loading();
    }

    render() {
        const { movie } = this.props
        return (
            <div className="movie" key={movie.index}> 
                <img className="movie__poster" src={movie.Poster} alt=""/>
                <h3 className="movie__title">{movie.Title}</h3>
                <Link to={`/moviedetails/${movie.imdbID}`} className="movie__moreinfo">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale : 0.9 }}
                        onClick={() => this.searchMovie(movie.imdbID)}
                        className="movie__moreinfo">
                        Movie Details
                        <img  className="movie__moreinfo__icon" src="https://www.flaticon.com/premium-icon/icons/svg/3346/3346837.svg"  alt=""/>
                    </motion.button>
                </Link>
            </div>
        )
    }
}

export default connect(mapStateToProps,{ fetchMovie, loading})(MoviesInfo);
