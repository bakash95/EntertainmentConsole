const initialState = {
    posts: [],
    trending:[],
    ajaxCalls: {
        getAllPosts: {
            loading: false,
            hasError: false
        },
        getAllTrending: {
            loading: false,
            hasError: false
        }
    }
}
export default initialState;