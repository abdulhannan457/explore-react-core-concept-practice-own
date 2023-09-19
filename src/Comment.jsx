import './Comments.css'
export default function Comment({Comment}){
   const {postId, id, name, email, body} = Comment;
    return (
        <div className="Comments">
            <h4>postId:{postId}</h4>
            <hr></hr>
            <p>id:{id}</p>
            <hr></hr>
            <p>name:{name}</p>
            <hr></hr>
            <p>email:{email}</p>
            <hr></hr>
            <p>body:{body}</p>
        </div>
    )
}