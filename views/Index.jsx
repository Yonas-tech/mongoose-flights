import React, { Component } from 'react'

// I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time

export class Index extends Component {
  render() {
    console.log(this.props.flights[0].departs)
    const flights = this.props.flights;
    return (
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
            {flights.map((flight, idx) => {
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
    )
  }
}

export default Index