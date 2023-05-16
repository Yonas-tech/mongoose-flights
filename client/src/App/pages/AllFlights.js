import React, { Component, useEffect, useState } from 'react'

export class AllFlights extends Component {
    constructor(props){
        super(props);
        this.state = {
            FlightList: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/api')
        .then(res => res.json())
        .then(FlightList = this.setState({FlightList}))
    }

  render() {
    const {FlightList} = this.state;

    return (
      <div className="App">
        <h1>List of Flights</h1>
        {FlightList.length? (
      <div>
        <h1>All Created Flights</h1>
        <table>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Flight No.</th>
              <th>Departure Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {FlightList.map((flight, idx) => {
              return(<tr key={idx}>
                <td>
                  {flight.airline}
                </td>
                <td><a href={`/flights/${flight.id}`}>{flight.flightNo}</a></td>
                <td>{flight.departs.toString()}</td>
              </tr>)
            })}
          </tbody>
        </table></div>
        ):
        <div>
            <h2>No Flights Data is Avelable</h2>
        </div>
        }
      </div>
    )
  }
}

export default AllFlights