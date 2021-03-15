import React, { loadUser, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Editmeds = () => {
  let history = useHistory();
  const { id } = useParams();
  const [medicine, setUser] = useState({
    Name: "",
    Manufacturor_Name: "",
    Price: "",
    Stock: "",
    Discount: ""
  });

  const { Name, Manufacturor_Name, Price, Stock, Discount } = medicine;
  const onInputChange = e => {
    setUser({ ...medicine, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/medicine/${id}`, medicine);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/medicine/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Medicine Info</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="Name"
              value={Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Manufacturor name"
              name="Manufacturor_name"
              value={Manufacturor_Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Price"
              name="Price"
              value={Price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Stock"
              name="Stock"
              value={Stock}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Discount"
              name="Discount"
              value={Discount}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Meds Info</button>
        </form>
      </div>
    </div>
  );
};

export default Editmeds;
