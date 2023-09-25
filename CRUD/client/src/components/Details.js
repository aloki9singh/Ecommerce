import React, { useContext, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { CardContent } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletedata, updatedata } from "./Context/ContextProvider";
const Details = () => {
  const { id } = useParams();
  const [userData, setUsersData] = useState({});
  const { edata, setEdata } = useContext(updatedata);
  const { ddata, setDdata } = useContext(deletedata);
  const navigate = useNavigate();
  const getData = async () => {
    const res = await fetch(`https://crud-y944.onrender.com/getdata/${id}`);

    const data = await res.json();

    if (res.status === 404 || !data) {
      alert("error");
      console.log("Error!");
    } else {
      setUsersData(data);

      console.log("Data is available");
    }
  };
  const { _id, email, name, mobile, age, work, add, description } = userData;

  const handleDelete = async () => {
    const res2 = await fetch(
      `https://crud-y944.onrender.com/deleteuser/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res2.json();

    if (res2.status === 404 || !data) {
      alert("error");
      console.log("Error!");
    } else {
      setDdata(data);
      console.log("User is deleted ");
      navigate("/");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-3">
      <div>
        <h1 style={{ fontWeight: "400" }}>Welcome {name}</h1>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <div className="add_btn ">
              <Link to={`/edit/${id}`}>
                <button className="btn btn-primary mx-2">
                  <EditIcon />
                </button>
              </Link>
              <button className="btn btn-danger" onClick={handleDelete}>
                <DeleteIcon />
              </button>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png"
              style={{ width: 80 }}
              alt="profilepic"
            />

            <div className="row">
              <div className="left_view col-lg-6 col-md-6 col-12">
                <h3 className="mt-3">
                  Name: <span style={{ fontWeight: 400 }}>{name}</span>
                </h3>
                <h3 className="mt-3">
                  Age: <span style={{ fontWeight: 400 }}>{age}</span>
                </h3>
                <p className="mt-3">
                  <MailOutlineIcon /> Email:
                  <span>{email}</span>
                </p>
                <p className="mt-3">
                  <WorkOutlineIcon /> occupation:
                  <span>{work}</span>
                </p>
              </div>
              <div className="right_view col-lg-6 col-md-6 col-12">
                <p className="mt-4">
                  <CallIcon /> Mobile:
                  <span>{mobile}</span>
                </p>
                <p className="mt-3">
                  <PlaceIcon /> Location:
                  <span>{add}</span>
                </p>
                <p className="mt-3">
                  Description:
                  <span>{description}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Details;
