import React, { Component } from 'react';
import './container.css';
import PageTitle from './page-title.js';
import TopForm from './top-form.js';
import Table from './table.js'


class Container extends Component {
  render() {
    return (
      <div className="main-container">
        <PageTitle />
        <TopForm />
        <Table partitions={this.props.partitions}/>

      </div>




    );
  }
}

export default Container;
