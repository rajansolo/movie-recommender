import React, { Component } from 'react';
import '../css/movies.css';
import { connect } from 'react-redux';
import MoviesInfo from './MoviesInfo'
import Loading from './Loading';

const mapStateToProps = state => ({
    movies: state.movies.movies,
    loading: state.movies.loading
})

class Movies extends Component {
    render() {
        const { movies } = this.props;  
        return (
            <div className="moviedetails">
                { 
                    movies.Response === "True" ?
                    movies.Search.map((movie, index) => {
                    return <MoviesInfo key={index} movie={movie} />
                    })
                    : 
                   null 
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Movies);
