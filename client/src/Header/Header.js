import axios from 'axios'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const state = useSelector(state => state?.user)
    const id = state[0]?.existingUser?._id
    var logouttime = new Date()


    // handling logout
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.clear('token')
        axios.post('http://localhost:8080/logout', { id,logouttime})
            .then(res => console.log("res",res))
            .catch(err => console.log(err))
        window.location.reload()
    }

    return (
        <>
            <Navbar bg="#353a41" variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">Demo Project</Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        {!localStorage.getItem('token') ?
                            <Navbar.Text>
                                <Link to="/login"><button className="signinbtn ">Sign in</button></Link>
                                <Link to="/signup"><button className="signupbtn">Sign up</button></Link>
                            </Navbar.Text> :
                            <Navbar.Text>
                                <Link className="logoutbtn" onClick={handleLogout}>Logout</Link>
                            </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Header
