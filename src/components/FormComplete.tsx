import React from "react";
import { ReactComponent as CheckIcon } from "../assets/check-solid.svg";

const Done = () => (
  <div className="form-complete">
    <CheckIcon className="check-icon" />
    <p>
      Please verify your email address, you should have received an email from
      us already!
    </p>
  </div>
);

export default Done;
