
import { configureStore } from '@reduxjs/toolkit'
import posts from '../rtk/postSlice'
import users from '../reducer/users'


    const store= configureStore({


reducer:{

    posts,users
}

    })

    export default store;