import React, { Component } from 'react';
import './top-form.css';
import Button from './button.js'

class TopForm extends Component {
  render() {
    return (
      <div className="top-form-container">
        <form className="top-form" action="index.html" method="post">
          <input type="text" name="full-name" value="" placeholder="Full name" className="col-15"></input>
          <input type="email" name="email" placeholder="Email address" className="col-35"></input>
          <input type="number" name="phone-number" value="" placeholder="Phone number" className="col-20"></input>
          <Button />
        </form>
      </div>





    );
  }
}

export default TopForm;
