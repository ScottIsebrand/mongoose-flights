const React = require('react');

function New() {
  return (
    <div>
      <h1>New Flight</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb. Telling form where to go, '/fruits' */}
      <form action="/flights" method="POST">
        {/* Note that names are the same as the keys of the properties of data array */}
        Airline: <input type="text" name="airline" />
        <br />
        FlightNo: <input type="number" name="flightNo" />
        <br />
        Departs: <input type="date" name="departs" />
        <br />
        <input type="submit" value="Create new flight" />
      </form>
    </div>
  );
}

module.exports = New;
