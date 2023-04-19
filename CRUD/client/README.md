CRUD

bootstrap
`npm i bootstrap`
use component navbar and table
btn----------->give no background
btn-primary---------->add blue color to button

## text-align: right;

##  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   
`<td className="d-flex justify-content-between">
                <button className="btn btn-success"><i class="fas  fa-eye"></i></button>
                <button className="btn btn-primary"><i class="fas  fa-pen"></i></button>
                <button className="btn btn-danger"><i class="fas  fa-trash"></i></button>
              </td>`

Switch
Route exact path="/" component={Home}


npm install @mui/material @emotion/react @emotion/styled

npm install @mui/icons-material

https://cdn-icons-png.flaticon.com/512/3048/3048127.png

import MailOutlineIcon from '@mui/icons-material/MailOutline';


.row add to row
col-lg-6 col-md-6 col-12  <add this to child>



///register

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    description: "",
  });
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;




///addproxy in packagejson
"proxy":"http://localhost:8080",

history.push("/")
const history =useHistory()




https://crud-y944.onrender.com/

Link  https://cl
ient-chi-gray
.vercel.app













