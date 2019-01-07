import React, { Component } from 'react';

import { BrowserRouter, Route, withRouter } from 'react-router-dom';

import './App.css';
import RoutePaths from './route/RoutePaths';
import Blog from './blogs/Blog';
import Home from './home/Home';
import {bindActionCreators} from'redux';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import * as postActions from './redux/actions/postActions.js';
import * as trendingActions from './redux/actions/trendingActions';

class App extends Component {

  componentDidMount(){
    this.props.postActions.getAllPosts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="Appheader">
            <Link to={RoutePaths.home}>Home</Link>
            <Link to={RoutePaths.trending}>Trending</Link>
            <Link to={RoutePaths.blogs}>blog</Link>
          </header>
          <Route path={RoutePaths.blogs}
            component={Blog} />
            <Route path={RoutePaths.home}
            component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    postActions: bindActionCreators(postActions, dispatch),
    authorsActions: bindActionCreators(trendingActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));