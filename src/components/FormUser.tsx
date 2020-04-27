import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { FormProps } from "./Form";

const FormUser = ({ changePage, handleChange, error }: FormProps) => (
  <div>
    <FormInput
      type="text"
      name="name"
      placeholder="Name"
      required
      handleChange={handleChange}
    />
    <FormInput
      type="text"
      name="role"
      placeholder="Role"
      handleChange={handleChange}
    />
    <FormInput
      type="email"
      name="email"
      placeholder="Email Address"
      required
      handleChange={handleChange}
    />
    <FormInput
      type="password"
      name="password"
      placeholder="Password"
      required
      handleChange={handleChange}
    />
    {error && <p className="form-error">{error}</p>}
    <SubmitButton changePage={changePage} disabled={error ? true : false} />
  </div>
);

export default FormUser;
