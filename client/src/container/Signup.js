import React, { useState } from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import { useHistory } from 'react-router'
function Signup() {
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/signup', {
            username, email, password
        })
            .then(res => {
                history.push('/login')
            })
            .catch(err =>alert('An account with this email already exists'))
    }   
    return (
        <div className="signup-main">
            <Header/>
         
                    <form className="signupform" autoComplete="off">
                        <h1>SIGN UP</h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">User name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                onChange={(e) => setUsername(e.target.value)} autocomplete="off"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="name" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                onChange={(e) => setEmail(e.target.value)} autocomplete="off"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control"
                                onChange={(e) => setPassword(e.target.value)} autocomplete="off"
                            />
                        </div>
                        <button className="signupbtn" onClick={handleSubmit}>Signup</button>
                    </form>
               
        </div>
    )
}

export default Signup
