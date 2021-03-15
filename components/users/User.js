import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    First_name: "",
    Last_name: "",
    Gender: "",
    Date_of_Birth: "",
    Experience: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Backe to Sales Executive Info.
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First name: {user.First_name}</li>
        <li className="list-group-item">Last name: {user.Last_name}</li>
        <li className="list-group-item">Gender: {user.Gender}</li>
        <li className="list-group-item">DOB: {user.Date_of_Birth}</li>
        <li className="list-group-item">Experience: {user.Experience}</li>
      </ul>
    </div>
  );
};

export default User;
