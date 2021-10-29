import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import Header from '../Header/Header'

function Users() {
    const state = useSelector(state => state?.user)
    
    const [users, setUsers] = useState()
    const [value, setValue] = useState(false)
    const [username, setUsername] = useState()
    const [UserId, setUserId] = useState()
    const [logouthistory, setlogouthistory] = useState()
    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then(res => {
                setUsers(res.data.users)
                setValue(true)
                console.log(res?.data?.users);

            })
            .catch(err => console.log(err))
    }, [])
    const changeHandler = value => {
        setUsername(value.value)
        setUserId(value.id)
        setlogouthistory(null)
    }
    const handleLogoutHistory = (e) => {
        console.log(UserId);
        const logoutArray = users.filter(user=>user._id===UserId)
        setlogouthistory(logoutArray[0].logout)
        console.log(logouthistory,logoutArray);
        

    }
    return (
        <div>
            <Header />
            {value && <Select options={users.map(el => {
                return ({ value: el.username, label: el.username, el: el, id: el._id })
            }

            )}
                onChange={changeHandler}
            />
            }
            <div className="usercard">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Name - {username}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>

                        <button className="userhistory" onClick={handleLogoutHistory}>logout history</button>
                    </Card.Body>
                </Card>
            </div>
            
            {logouthistory?<><h2 className="m-4">Logout History</h2>
            {logouthistory.map(value=><ul><li>{value}</li></ul>)}</>:
            
            null   
            }
        </div>
    )
}

export default Users
