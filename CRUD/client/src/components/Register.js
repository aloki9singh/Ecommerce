import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { adddata } from "./Context/ContextProvider";

const Register = () => {
  const {udata,setUdata}=useContext(adddata)
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    description: "",
  });
  const navigate =useNavigate()
  console.log(input);
  const setData = (e) => {
    const { name, value } = e.target;
    setInput((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const addInputData = async (e) => {
    e.preventDefault();
    const res = await fetch(`/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error");
      console.log("Error!");
    } else {
     
      alert("Data Added Successfully");
      navigate("/")
      console.log("Data Added Successfully");
      setUdata(data)
    }
  };
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
              name="add"
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

          <button
            type="submit"
            className="btn btn-primary"
            onClick={addInputData}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
