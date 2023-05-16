import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Flights Home</h1>
        <Link to={'./AllFlights'}>
            <button>
                All Flights
            </button>
        </Link>
      </div>
    )
  }
}

export default Home