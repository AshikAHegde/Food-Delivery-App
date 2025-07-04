import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [cred, setCred] = useState({ name: "", email: "", password: "", location: "" })

    const HandelSubmit = async (e) => {
        console.log(cred);
        e.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/createuser`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cred)
            }
        )
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credientials");
        }
        else {
            navigate('/login')
        }
    };

    const formchange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    };

    return (
        <div className='container '>
            <form onSubmit={HandelSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={formchange} name={"name"} value={cred.name} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={formchange} name={"email"} value={cred.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <p >We will never share your email with anyone else.</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={formchange} name={"password"} value={cred.password} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input onChange={formchange} name={"location"} value={cred.location} type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-success text-white">Submit</button>
                <Link to='/login' className='m-3 btn btn-danger'>Already a User</Link>
            </form>
        </div>
    )
}

export default Signup
