import React from 'react';

const CheckboxInput = ({ label, name, checked, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckboxInput;