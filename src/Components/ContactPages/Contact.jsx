import React from "react";

const Contact = (props) => {
  const handleFavorite = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555" }}
    >
      <div className="col-2 col-md-1 pt-2 pt-md-1">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
          style={{ width: "80%" }}
          alt=""
        />
      </div>
      <div className="col-5 col-md-6 text-warning pt-0">
        <span className="h4">{props.contact.name}</span>
        <br />
        <span className="text-white-50">
          {props.contact.email} <br />
          {props.contact.phone}
        </span>
      </div>
      <div className="col-5 col-md-5 pt-md-3">
        <button
          className={`btn btn-sm mx-5 ${
            props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => props.handleToggleFavorite(props.contact)}
        >
          <i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
        </button>
        <button className="btn btn-primary btn-sm m-1">
          <i className="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
        </button>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => props.handleDeleteContact(props.contact.id)}
        >
          <i className="bi bi-trash-fill" style={{ fontSize: "1rem" }}></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
