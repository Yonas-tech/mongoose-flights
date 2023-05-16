import React, { Component } from 'react'

// I want to create flights by entering the information on a page (new view) that has a form and submitting it
// ['American','Southwest','United']
export class New extends Component {
  render() { //props from server.js
    const defaultDepDate = this.props.departDate;
    const defaultAriDate = this.props.arrivalDate;
    const fromAirports = this.props.fromAirports;
    const toAirports = this.props.toAirports;
    const airlines = this.props.airlines;
    console.log(fromAirports)
    console.log(toAirports)
    console.log(airlines)
    console.log(defaultDepDate)
    return (
      <div>
        <h1>Add A New Flight</h1>

        <form action="/flights" method='POST'>
          Airline: <select name="airline" id="airline">
            <option value="American">American</option>
            <option value="Southwest">Southwest</option>
            <option value="United">United</option>
          </select><br /><br />
          Flight Number (9 - 9999): <input type="number" name='flightNo' id='flightNo' /><br /><br />
          {/* min={9} max={9999} */}
          Where From?:   <select name="fromAirport" id="fromAirport">
            {/* {fromAirports.map((airport)=>{<option value={airport}>{airport}</option>})} */}
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
            <option value="SAN">SAN</option>
          </select><br /><br />
          Where To?:  <select name="toAirport" id="toAirport">
            {/* {toAirports.map((airport)=>{<option value={airport}>{airport}</option>})} */}
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
            <option value="SAN">SAN</option>
          </select><br /><br />

          Departure Date: <input type="datetime-local" name='departs' id='departs' defaultValue={defaultDepDate} /><br /><br />
          
          Arrival Date: <input type="datetime-local" name='arrives' id='arrives' defaultValue={defaultAriDate} /><br /><br />

          <input type="submit" value="Add Flight"></input><br />
        </form>
      </div>
    )
  }
}

export default New
