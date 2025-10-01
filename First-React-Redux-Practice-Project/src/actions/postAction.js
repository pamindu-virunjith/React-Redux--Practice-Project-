import { FETCH_BUTTON_CLICKED, SELECT_POST } from "./types"
import axios from 'axios'

// const FetchPosts = () => {
//     return {
//         type: FETCH_BUTTON_CLICKED,
//         payload:[
//             {
//                 userId: 1,
//                 id: 1,
//                 title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//                 body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//             },
//             {
//                 userId: 1,
//                 id: 2,
//                 title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//                 body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//             },
//             {
//                 userId: 1,
//                 id: 3,
//                 title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//                 body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//             },
//             {
//                 userId: 1,
//                 id: 4,
//                 title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//                 body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//             },
//             {
//                 userId: 1,
//                 id: 5,
//                 title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//                 body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//             }
//         ]
//     }
// }

// export default FetchPosts

export default function FetchPosts() {
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => {
            dispatch({
                type: FETCH_BUTTON_CLICKED,
                payload: res.data
            })
        })
    }
}

export const selectPost=(post)=>{
    return{
        type: SELECT_POST,
        payload: post
    }
}