import React from "react";
import { Redirect } from "react-router-dom";
import {Header} from "../components/Header";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

export const Profile = props => {
  const isLogin = props.isLogin;
  const email = props.email;
  const full_name = props.name;
  console.warn("isLogin", props.isLogin);
  if (isLogin === null) {
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
        </form>
      </React.Fragment>
    );
  }
};

export default connect("isLogin, email, name", actions)(withRouter(Profile));