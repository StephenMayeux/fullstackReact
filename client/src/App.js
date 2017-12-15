import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.actions.fetchMovies();
  }

  renderMovies() {
    if (this.props.movies.length === 0) return null;
    return this.props.movies.map(movie => {
      return <p key={movie.title}>{movie.title}</p>
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.renderMovies()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
  // this.props.movies;
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
