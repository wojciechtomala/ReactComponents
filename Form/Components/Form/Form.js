import React from 'react';
import Input from '../Input/Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      numberOfGuests: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Your favorite flavor is: ' + JSON.stringify(this.state));
    console.log(this.state);
  }

  render() {
    const { isGoing, numberOfGuests } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={this.handleInputChange}
          label="Is going:"
        />
        <br />
        <Input
          name="numberOfGuests"
          type="text"
          value={numberOfGuests}
          onChange={this.handleInputChange}
          label="Number of guests:"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
