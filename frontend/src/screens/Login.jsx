import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [cred, setCred] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const HandelSubmit = async (e) => {
        console.log(cred);
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",
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
            alert("Enter Valid Credentials");
        }
        else {
            localStorage.setItem('token', json.token);
            alert("Login Successfully");
            navigate('/');
        }
    };

    const formchange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    };

    return (
        <div className='container '>
            <form onSubmit={HandelSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={formchange} name={"email"} value={cred.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <p >We will never share your email with anyone else.</p>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={formchange} name={"password"} value={cred.password} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary btn-success text-white">Submit</button>
                <Link to='/signup' className='m-3 btn btn-danger'>Not Sign Up Yet!</Link>
            </form>
        </div>
    )
}

export default Login
