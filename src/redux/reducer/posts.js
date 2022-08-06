
export default (state = [], { type, payload }) => {
    switch (type) {
        case "ADD_POSTS": return payload
        default: return state
    }
}