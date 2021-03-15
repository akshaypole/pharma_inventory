
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const About = () => {
  const [medicine, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/medicine");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/medicine/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Medicines Info Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Manufacturor Name</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Discount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {medicine.map((medicine, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{medicine.Name}</td>
                <td>{medicine.Manufacturor_Name}</td>
                <td>{medicine.Price}</td>
                <td>{medicine.Stock}</td>
                <td>{medicine.Discount}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/medicine/${medicine.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/medicine/edit/${medicine.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(medicine.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
