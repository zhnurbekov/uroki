import React from 'react';
import PropsTypes from 'prop-types'

export default function Input({ value, onChange }) {
  return (
    <input
      className="test-input"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  );
}

Input.propTypes = {
  name: PropsTypes.any.isRequired
};
