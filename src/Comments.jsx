import { useEffect, useState } from "react"
import Comment from "./Comment"
export default function Comments(){

    const [Comments, setComments] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h3>comments: {Comments.length}</h3>
            {
            Comments.map(comment=><Comment Comment={comment}></Comment>)
            }
        </div>
    )
}