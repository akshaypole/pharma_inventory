import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Viewmeds = () => {
  const [medicines, setUser] = useState({
    Name: "",
    Manufacturor_Name: "",
    Price: "",
    Stock: "",
    Discount: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/medicine/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Backe to Medicine Info.
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {medicines.Name}</li>
        <li className="list-group-item">Manufacturor_Name: {medicines.Manufacturor_Name}</li>
        <li className="list-group-item">Price: {medicines.Price}</li>
        <li className="list-group-item">Stock: {medicines.Stock}</li>
        <li className="list-group-item">Discount: {medicines.Discount}</li>
      </ul>
    </div>
  );
};

export default Viewmeds;