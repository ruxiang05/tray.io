import React from "react";
import FormInput from "./FormInput";
import { FormProps } from "./Form";
import SubmitButton from "./SubmitButton";

const Privacy = ({ changePage, handleChange }: FormProps) => (
  <div>
    <FormInput
      type="checkbox"
      name="productComm"
      text="Receive updates about Tray.io product by email"
      handleChange={handleChange}
    />
    <FormInput
      type="checkbox"
      name="otherComm"
      text="Receive communication by email for other products created by the Tray.io
      team"
      handleChange={handleChange}
    />
    <SubmitButton changePage={() => changePage("done")} />
  </div>
);

export default Privacy;
