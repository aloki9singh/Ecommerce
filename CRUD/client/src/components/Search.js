import React, { useContext, useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { adddata, deletedata, updatedata } from "./Context/ContextProvider";

const Search = () => {
  const [userData, setUsersData] = useState([]);
  const { udata, setUdata } = useContext(adddata);
  const { edata, setEdata } = useContext(updatedata);
  const { ddata, setDdata } = useContext(deletedata);
  console.log("edata", edata);
  console.log("ddata", ddata);
  console.log("udata", udata);
  const getData = async () => {
    const res = await fetch(`http://localhost:8080/getdata`);

    const data = await res.json();

    if (res.status === 404 || !data) {
      alert("error");
      console.log("Error!");
    } else {
      console.log("Data is available");
      setUsersData(data);
    }
  };

  const handleDelete = async (id) => {
    const res2 = await fetch(`http://localhost:8080/deleteuser/${id}`, {
      method: "DELETE",
    });

    const data2 = await res2.json();

    if (res2.status === 404 || !data2) {
      alert("error");
      console.log("Error!");
    } else {
      console.log("User is deleted");
      getData();
      setDdata(data2);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {udata ? (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{udata.name} </strong> Added Successfully.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {ddata ? (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{ddata.name} </strong> Deleted Successfully.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {edata ? (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{edata.name} </strong> Updated Successfully.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-5">
        <div className="containe">
          <div className="add_btn mt-2 mb-2 ">
            <Link to="/register">
              {" "}
              <button className="btn btn-primary">Add Data</button>
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Job</th>
                <th scope="col">Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {userData.map((e, i) => (
                <tr key={e._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.work}</td>
                  <td>{e.mobile}</td>
                  <td className="d-flex justify-content-between">
                    <Link to={`/view/${e._id}`}>
                      <button className="btn btn-success">
                        <RemoveRedEyeIcon />
                      </button>
                    </Link>
                    <Link to={`/edit/${e._id}`}>
                      <button className="btn btn-primary">
                        <EditIcon />
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(e._id)}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Search;
