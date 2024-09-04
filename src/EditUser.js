import React, { useEffect } from 'react'
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
 
 let params = useParams()
 useEffect(() => {
  async function fetchData(){
    let userData = await axios.get(`http://localhost:3000/users/${params.id}`)
    formik.setValues(userData.data)
  }
  fetchData();
 }, [])
 
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
      },
      onSubmit: (values) => {
        //   alert(JSON.stringify(values, null, 2));
        try {
          axios.put(`http://localhost:3000/user/${params.id}`,values);
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      },
    });
  
    return (
      <>
        <div className="container">
          <div className="row">
            <form onSubmit={formik.handleSubmit}>
              <div className="col-lg-6">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <button className="btn btn-primary mt-3 text-center">Sumbit</button>
            </form>
          </div>
        </div>
      </>
  )
}

export default EditUser