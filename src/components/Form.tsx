import React, { useState } from "react";
import FormUser from "./FormUser";
import FormHeader from "./FormHeader";
import FormPrivacy from "./FormPrivacy";
import FormComplete from "./FormComplete";
import "../styles/styles.scss";

export interface FormProps {
  error?: string;
  changePage: (a: string) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Form = () => {
  const [formUserState, setFormUserState] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });
  const [page, setPage] = useState("user");
  const [error, setError] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setFormUserState({
      ...formUserState,
      [name]: value,
    });
  };

  const changePage = (page: string) => {
    const isValid = validateForm();

    if (isValid) setPage(page);
  };

  const validateForm = () => {
    if (!(validateName() && validateEmail() && validatePassword())) {
      setError("Form is incorrect, please check again");
      return false;
    }

    return true;
  };

  const validateName = (): boolean => {
    const { name } = formUserState;

    return name ? true : false;
  };

  const validateEmail = (): boolean => {
    const { email } = formUserState;
    if (!email) {
      return false;
    }

    const regex = new RegExp(/\S+@\S+\.\S+/);
    return regex.test(email);
  };

  const validatePassword = (): boolean => {
    const { password } = formUserState;

    if (!password) {
      return false;
    }

    const regex: RegExp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/g);
    return regex.test(password);
  };

  const renderFormPage = (page: string) => {
    switch (page) {
      case "user":
        return (
          <FormUser
            changePage={changePage}
            handleChange={handleChange}
            error={error}
          />
        );
      case "privacy":
        return (
          <FormPrivacy changePage={changePage} handleChange={handleChange} />
        );
      case "done":
        return <FormComplete />;
    }
  };

  return (
    <div className="form">
      <FormHeader currentPage={page} />
      <form>{renderFormPage(page)}</form>
    </div>
  );
};

export default Form;
