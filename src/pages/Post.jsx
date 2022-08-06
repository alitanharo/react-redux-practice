
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addPosts, fetchPosts } from './../redux/actions/posts';
import { useEffect } from 'react';

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)


    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            {posts.map(item =>
                <p>{item.title}</p>
            )}
        </div>
    );
}

export default Posts;