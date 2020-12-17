import React, { Component } from 'react';
import Navbar from './Navbar';
import SearchMovie from './searchMovie';
import MovieDetails from './MovieDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    movie :  state.movies.movies
})

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={SearchMovie} />
                    <Route path="/moviedetails/:id" component={MovieDetails} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Main);