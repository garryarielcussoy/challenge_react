import React from "react";
import { Redirect } from "react-router-dom";
import {Header} from "../components/Header";

const setLogin = () => {
    this.setItem("is_login", false)
}

export const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const email = localStorage.getItem("email");
  const full_name = localStorage.getItem("name");
  console.warn("is_login", is_login);
  if (is_login === null) {
    return <Redirect to={{ pathname: "/masuk" }} />;
  } else {
    return (
      <React.Fragment>
        <Header {...props} />
        <form className="profile-content">
          <h1
            style={{
              textalign: "center"
            }}
          >
            Profile
          </h1>
          <p>
            <label>Email:</label> {email}
          </p>
          <p>
            <label>Full Name:</label> {full_name}
          </p>
          <button>Logout</button>
        </form>
      </React.Fragment>
    );
  }
};