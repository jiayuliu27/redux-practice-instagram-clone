import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import PhotoGridContainer from '../containers/PhotoGridContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
          <PhotoGridContainer />
        </h1>
        { this.props.children }
      </div>
    );
  }
}

export default App;
