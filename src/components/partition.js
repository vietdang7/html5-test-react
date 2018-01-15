import React, { Component } from 'react';


class Partition extends Component {
  render() {
    return (
      <tr>
        <td className="col-20">{this.props.partition.name}</td>
        <td className="col-35">{this.props.partition.email}</td>
        <td className="col-15">{this.props.partition.phone}</td>
        <td>
          <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
          <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
        </td>
      </tr>
    );
  }
}

export default Partition;
