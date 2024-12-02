/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import CommentList from "./CommentList"
// eslint-disable-next-line react/prop-types
const CommentArea = ({bookID}) => {
  const [comments, setComments] = useState([]); // Stato per i commenti
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per eventuali errori

  // Funzione per recuperare i commenti
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookID}`,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Nzc1ZTA2ZmM4YzAwMTU2Yjg3MDkiLCJpYXQiOjE3MzI4MDIzOTgsImV4cCI6MTczNDAxMTk5OH0.MxeUyEa3emk28WD_XhePYo2DMzDfRD33G3PybetaXLg"
          },
        }
      );

       const data = await response.json();
      setComments(data); // Salviamo i commenti nello stato
    } catch (err) {
      setError(err.message); // Gestione dell'errore
    } finally {
      setLoading(false); // Fine del caricamento
    }
  };

  // Recuperiamo i commenti quando il componente viene montato
  useEffect(() => {
    if (bookID) fetchComments();
  }, [bookID]);

  return (
    <div className="comment-area mt-4">
      <h5>Commenti per il libro {bookID}</h5>
      {loading && <p>Caricamento commenti...</p>}
      <CommentArea id="listacommenti" bookID={book.asin}/>
      {!loading && !error && comments.length === 0 && <p>Nessun commento disponibile.</p>}
     <CommentList comments= {comments} />
     
    </div>
  );
};

export default CommentArea;


