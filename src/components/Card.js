import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ profile,onDelete  }) => {
  const { avatar, name, job, } = profile;
  return (
    <div className="card">
      <img src={avatar} alt="avatar" />
      <div className="card-body">
        <h2>{name}</h2>
        <h3>{job}</h3>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};



export default Card;
