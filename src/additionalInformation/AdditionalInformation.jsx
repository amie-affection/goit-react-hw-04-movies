import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const AdditionalInformation = ({ id, location }) => {
  return (
    <div>
      <nav>
        <ul style={{ paddingLeft: "0px" }}>
          <h4 style={{ marginBottom: "6px" }}>Additional Information</h4>
          <li style={{ marginBottom: "5px" }}>
            <NavLink
              to={{
                pathname: `/movies/${id}/cast`,
                state: location.state,
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${id}/reviews`,
                state: location.state,
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(AdditionalInformation);
