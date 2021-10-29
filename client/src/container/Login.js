import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../Header/Header'
import { setusers } from './action/action'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {

        if(localStorage.getItem('token')){
            history.push('/users')
        }
        

    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/login', {
            email, password
        })
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log("fffffffffffffff",res.data.user.existingUser._id);
                dispatch(setusers(res.data.user))
                history.push('/users')
            }
            )
            .catch(err => alert('Invalid id or password'))
    }
    return (
        <div>
            <Header />
            <form className="signniform" autoComplete="off">
                <h1>SIGN IN</h1>

                <div className="mb-3">
                    <label for="name" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="signinbtn" onClick={handleSubmit}>Signin</button>
            </form>
        </div>
    )
}

export default Login
