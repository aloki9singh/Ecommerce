import React, { useContext, useEffect, useState } from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { updatedata } from "./Context/ContextProvider";
const Edit = () => {

  const {edata,setEdata} =useContext(updatedata)
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    description: "",
  });
  const navigate=useNavigate()
  

  const setData = (e) => {
    const { name, value } = e.target;
    setInput((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const { id } = useParams();
 

  const getData = async () => {
    const res = await fetch(`http://localhost:8080/getdata/${id}`);

    const data = await res.json();

    if (res.status === 404 || !data) {
      alert("error");
      console.log("Error!");
    } else {
      setInput(data);

      // console.log("Data is available");
    }
  }
  const updateData=async(e)=>{
     e .preventDefault()

    const res2 = await fetch(`http://localhost:8080/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const data3 = await res2.json();

    if (res2.status === 404 || !data3) {
      alert("Please Fill Data!");
      console.log("Error!");
    } else {
      navigate("/")
      setEdata(data3)
      console.log("Data Updated Successfully");
    }

  }
  useEffect(() => {
    getData();
 
  }, []);
  return (
    <div className="m-5">
      <NavLink to="/">Home</NavLink>
      <form className="mt-5">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              value={input.name}
              onChange={setData}
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={setData}
              value={input.email}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Age
            </label>
            <input
              onChange={setData}
              value={input.age}
              name="age"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mobile
            </label>
            <input
              onChange={setData}
              value={input.mobile}
              type="text"
              name="mobile"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Work
            </label>
            <input
              onChange={setData}
              value={input.work}
              type="text"
              name="work"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Address
            </label>
            <input
              onChange={setData}
              value={input.add}
              type="text"
              name="work"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <textarea
              onChange={setData}
              value={input.description}
              name="description"
              className="form-control"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" onClick={updateData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
