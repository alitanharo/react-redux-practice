import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from './../redux/actions/users';

const Users = () => {


    const dispatch = useDispatch()
    const users = useSelector(state => state.users)


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => dispatch(addUsers(res)))
    }, [])

    return (
        <div>
            {users.map(item =>
                <p>{item.name}</p>
            )}
        </div>
    );
}

export default Users;