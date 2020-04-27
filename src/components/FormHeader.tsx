import React from "react";

interface FormHeaderProps {
  currentPage: string;
}

interface FormHeaderItemProps extends FormHeaderProps {
  page: string;
}

const FormHeader = ({ currentPage }: FormHeaderProps) => {
  return (
    <ul className="form-header">
      <FormHeaderItem page="user" currentPage={currentPage} />
      <FormHeaderItem page="privacy" currentPage={currentPage} />
      <FormHeaderItem page="done" currentPage={currentPage} />
    </ul>
  );
};

//todo fix empty calss
const FormHeaderItem = ({ currentPage, page }: FormHeaderItemProps) => (
  <li className={`${currentPage === page ? "selected-page" : ""}`}>{page}</li>
);

export default FormHeader;
