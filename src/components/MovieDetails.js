import React, { Component } from 'react';
import {connect} from 'react-redux'
import Loading from './Loading';
import '../css/movieDetails.css';

const mapStateToProps = state =>({
    movie: state.movies.movie,
    loading : state.movies.loading
})

class MovieDetails extends Component {
    render() {

        const { movie, loading } = this.props

        const movieinfo = (
                        <div className="movieDetails">
                            <img className="movieDetails__poster" src={movie.Poster} alt={movie.Title} />
                            <div className="movieDetails__info">
                                <h2>{movie.Title} </h2>
                                <table>
                                <tbody>
                                        <tr>
                                            <th>Type: </th>
                                            <td> {movie.Type}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>                   
                                            <th>Genere</th>
                                            <td> {movie.Genre}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Released Date </th>
                                            <td> {movie.Released}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>IMDB Rating: </th>
                                            <td> {movie.imdbRating}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Run Time: </th>
                                            <td> {movie.Runtime}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Director </th>
                                            <td> {movie.Director}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Writer </th>
                                            <td> {movie.Writer}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Actors </th>
                                            <td> {movie.Actors}</td>
                                        </tr> 
                                    </tbody>
                                    <tbody>                   
                                        <tr>
                                            <th>Language </th>
                                            <td> {movie.Language}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );

        let content = loading ? <Loading /> : movieinfo
        return (
            <div> {content}</div>
        );
    }
}


export default connect(mapStateToProps)(MovieDetails);
