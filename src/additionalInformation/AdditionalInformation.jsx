import React from "react";
import { NavLink } from "react-router-dom";

const AdditionalInformation = ({ id }) => {
  return (
    <div>
      <nav>
        <ul style={{ paddingLeft: "0px" }}>
          <h4 style={{ marginBottom: "6px" }}>Additional Information</h4>
          <li style={{ marginBottom: "5px" }}>
            <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdditionalInformation;
