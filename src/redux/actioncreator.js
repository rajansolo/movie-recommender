import * as ActionTypes from './actiontypes';
import axios from 'axios';
import {APIKey} from '../APIKey'; 

export const searchMovies = (text) => dispatch =>{
    dispatch({
        type: ActionTypes.SEARCH_MOVIES,
        payload: text,
    })
}

export const fetchMovies = (text) => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(response => 
            dispatch({
            type: ActionTypes.FETCH_MOVIES,
            payload: response.data,
        }))
        .catch(err => console.log(err))
}

export const loading = () =>({
    type: ActionTypes.MOVIE_LOADING,
})


export const fetchMovie = (id) => dispatch =>  {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(response => dispatch({
            type: ActionTypes.FETCH_MOVIE,
            payload: response.data,
        }))
        .catch(err => console.log(err))
}