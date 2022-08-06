export const addPosts = (payload) => {
    return { type: "ADD_POSTS", payload }
}

export const fetchPosts = () => {
    return (dispatch) =>
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => dispatch(addPosts(res)))
}