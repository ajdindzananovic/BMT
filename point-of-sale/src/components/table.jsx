import React from "react";
const Table = () => {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Stock No</th>
          <th scope="col">Item name</th>
          <th scope="col">Retail Price</th>
          <th scope="col">On-Hand</th>
          <th scope="col">Average Cost</th>
          <th scope="col">Total Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Majca</td>
          <td>20</td>
          <td>12</td>
          <td>11</td>

          <td>400</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Panole</td>
          <td>20</td>
          <td>12</td>
          <td>11</td>

          <td>400</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Kosulja</td>
          <td>20</td>
          <td>12</td>
          <td>11</td>

          <td>400</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
