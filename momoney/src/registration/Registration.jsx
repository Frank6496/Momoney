import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Registration.css';

function Registration () {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
        <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" >
          Register
        </button>
        <button
          className="register__btn register__google"
          
        >
          Register with Google
        </button>

        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
    )
        
    

}

export default Registration;