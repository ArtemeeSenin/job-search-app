import React, { Component, Fragment } from 'react';
import NavMenu from './components/NavMenu'


class App extends Component {
  render() {
    return (
      <Fragment>
          <NavMenu />
          <main class="page-content">
            <div class="container">
            </div>
          </main>
      </Fragment>
    );
  }
}

export default App;