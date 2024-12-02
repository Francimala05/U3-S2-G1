/* eslint-disable react/prop-types */
const CommentList = ({comments}) => {

  return( 
  <ul className="list-group">
  
  {comments.map((comment) => (
    <li key={comment._id} className="list-group-item">
      <strong>Autore:</strong> {comment.author}
      <br />
      <strong>Commento:</strong> {comment.comment}
      <br />
      <strong>Voto:</strong> {comment.rate}
    </li>
  ))}
  </ul>
  )
  }
  
  
  export default CommentList;