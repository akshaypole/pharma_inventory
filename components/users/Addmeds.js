import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Addmeds = () => {
  let history = useHistory();
  const [medicines, setUser] = useState({
    Name: "",
    Manufacturor_Name: "",
    Price: "",
    Stock: "",
    Discount: ""
  });

  const { Name, Manufacturor_Name, Price, Stock, Discount } = medicines;
  const onInputChange = e => {
    setUser({ ...medicines, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/medicine", medicines);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Medicine</h2>
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
          <button className="btn btn-primary btn-block">Add Medicine</button>
        </form>
      </div>
    </div>
  );
};

export default Addmeds;
