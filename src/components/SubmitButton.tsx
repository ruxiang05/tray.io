import React from "react";

interface SubmitButtonProps {
  changePage: (a: string) => void;
  disabled?: boolean;
}

const SubmitButton = ({ changePage, disabled }: SubmitButtonProps) => (
  <button
    type="button"
    onClick={() => changePage("privacy")}
    disabled={disabled}
  >
    Submit
  </button>
);

export default SubmitButton;
