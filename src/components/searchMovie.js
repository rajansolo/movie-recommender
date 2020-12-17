import React, { Component } from 'react';
import '../css/searchmovie.css';
import {connect} from 'react-redux';
import { searchMovies, fetchMovies, loading } from '../redux/actioncreator';
import Loading from './Loading';
import Movies from './Movies'

const mapStateToProps =  state => ({
    text: state.movies.text,
    loading: state.movies.loading
}) 


class SearchMovie extends Component {

    onChange = (event) =>{
        this.props.searchMovies(event.target.value)
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.loading()
    }

    componentDidMount = () =>{
        fetchMovies();
    }

    render() {
        const { loading } = this.props 
        return (
            <>
            <div className="searchmovie">
                <div className="searchmovie__header">
                    <img className="searchmovie__searchicon" src="https://www.flaticon.com/svg/static/icons/svg/751/751381.svg" alt="search" />
                    <span className="searchmovie__text"> For Movies And Series </span>
                </div> 
                <form className="searchmovie__form" onSubmit={this.handleSubmit}>
                    <input
                        type="text" className="searchmovie__form__input"
                        name="searchText"
                        placeholder="Enter Movies, TV Series... " 
                        value={this.props.text}
                        onChange={this.onChange}
                    />
                    <button type="submit" className="searchmovie__form__submit">search</button>
                </form>
            </div>
            <div className="seac">
                {
                    loading === true ? <Loading /> : <Movies /> 
                }
            </div>
            </>
        )
    }
}

export default connect(mapStateToProps, { searchMovies, fetchMovies, loading })(SearchMovie);