import React from "react";
import { Link } from "react-router-dom";
const AccountHead = (props) => {
  return (
    <article>
      <div className="header">
        <br />
        <h1>Welcome back</h1>

        <h1>{props.h1}</h1>
        <Link to="/profileUpdate">
          <button className="edit-button">Edit Name</button>
        </Link>
      </div>
      <h2 className="sr-only">Accounts</h2>
    </article>
  );
};

export default AccountHead;
