import React from 'react';

const FormInput = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label>{label}{required && '*'}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormInput;