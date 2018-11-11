import React, { Component, Fragment } from 'react';
import NavMenu from './components/containers/NavMenu'
// import Rating from './components/Rating'
import VacancyCard from './components/VacancyCard'

class App extends Component {
  render() {
    return (
      <Fragment>
          <NavMenu />
          <main className="page-content">
            <div className="container">
              <VacancyCard />
            </div>
          </main>
      </Fragment>
    );
  }
}

export default App;