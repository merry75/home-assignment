import React, { Component } from "react";

import { Table } from "react-bootstrap";

class CountryDetails extends Component {
  state = {
    data: []
  };
  componentWillMount() {
    fetch("http://northwind.servicestack.net/customers.json")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ data: data.Customers });
      });
  }

  render() {
    const myArray = [this.state.data];

    let CountryName = myArray[0].map(value => {
      return <th key={value.Id}>{value.Country}</th>;
    });

    let CityName = myArray[0].map(value => {
      return <td key={value.Id}>{value.City}</td>;
    });

    return (
      <div>
        <Table responsive>
          <thead>
            <tr>{CountryName}</tr>
          </thead>
          <tbody>
            <tr>{CityName}</tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CountryDetails;
