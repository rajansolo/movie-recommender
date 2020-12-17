import * as ActionTypes from './actiontypes';

const initialState = {
    text: '',
    movie: [],
    loading: false,
    movies: []
}

export const SearchReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.SEARCH_MOVIES:
            return { ...state, text: action.payload, loading: false};

        case ActionTypes.MOVIE_LOADING :
            return { ...state, loading: true };
         

        case ActionTypes.FETCH_MOVIES:
            return { ...state, movies: action.payload, loading: false,};
        
        case ActionTypes.FETCH_MOVIE:
            return { ...state, movie: action.payload, loading: false};
               
        default:
            return state;
    }
}

