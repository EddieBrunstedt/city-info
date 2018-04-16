import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (


      <form id="search-form" className="card">
        <ul>
          <li>
            <input type="text" id="city-input" className="field-style" placeholder="Enter city here.."/>
          </li>
          <li>
            <input type="submit" onClick={this.props.handleSubmit} value="Search"/>
          </li>
        </ul>
      </form>
    );
  }
}

export default Form;