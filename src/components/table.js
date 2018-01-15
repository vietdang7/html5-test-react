import React, { Component } from 'react';
import Partition from './partition.js'
import './table.css';


class Table extends Component {
  render() {
    let partitionInfo;
    if(this.props.partitions){
      partitionInfo = this.props.partitions.map(partition => {
        return (
          <Partition key={partition.key} partition={partition} />
        );
      });
    }
    return (
      <div>
        <table className="main-table">
          <tr>
            <th>
              <p>Name</p>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>

            </th>
            <th>
              <p>Email address</p>
            </th>
            <th>
              <p>Phone number</p>
            </th>
            <th></th>
          </tr>
          {partitionInfo}


        </table>
      </div>





    );
  }
}

export default Table;
