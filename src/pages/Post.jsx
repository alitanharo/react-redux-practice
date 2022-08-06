
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addPosts, fetchPosts } from './../redux/actions/posts';
import { useEffect } from 'react';
import { getAsyncPost } from '../redux/rtk/postSlice';

const Posts = () => {
    const dispatch = useDispatch()
    const {posts,loading,err} = useSelector(state => state.posts)


    useEffect(() => {
        dispatch(getAsyncPost())
        if(loading) return <p>Loding...</p>
    }, [])

    return (
        <div>
            {posts?.map(item =>
                <p>{item.title}</p>
            )}
        </div>
    );
}

export default Posts;