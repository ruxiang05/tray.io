import React from "react";


interface FormInputProps {
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  text?: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  type,
  name,
  required,
  placeholder,
  text,
  handleChange,
}: FormInputProps) => (
  <div className="form-input">
    <label htmlFor={name}>{text || `${name}:`}</label>
    {required && <span className="required-mark"> * </span>}
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default FormInput;
