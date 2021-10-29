import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

function Protected(props) {
    const history = useHistory()
    const Cms = props.cms
    useEffect(() => {

        if(!localStorage.getItem('token')){
            history.push('/signin')
        }

    }, [])
    return (
        <div>
            <Cms/>
        </div>
    )
}

export default Protected
