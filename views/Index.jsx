const React = require('react');

// our function component
function Index(props) {
  const { flights } = props;

  return (
    <div>
      <nav>
        <a href="/flights/new">Add a New Flight</a>
      </nav>
      <h1>List/Index of Flights</h1>
      <ul>
        {flights.map((flight, index) => {
          return (
            <li key={flight._id}>
              Airline: {flight.airline}, Flight No: {flight.flightNo},
              Departure: {new Date(Date(flight.departs)).toLocaleDateString()}{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
