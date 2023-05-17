import React from 'react';

class Input extends React.Component {
  render() {
    const { name, type, value, checked, onChange, label } = this.props;
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          checked={checked}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;