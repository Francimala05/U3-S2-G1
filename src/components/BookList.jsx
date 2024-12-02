import { useState } from 'react';
import books from '../../fantasy.json'; // Importa il file JSON
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

function BasicExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const filtraLibri = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Colonna sinistra: Griglia dei libri */}
        <div className="col-md-8">
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Cerca il titolo di un libro"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="row">
            {filtraLibri.map((book) => (
              <div className="col-md-4 mb-4" key={book.asin} onClick={() => handleBookClick(book)}>
                <SingleBook book={book} />
              </div>
            ))}
          </div>
        </div>

        {/* Colonna destra: CommentArea */}
        <div className="col-md-4">
          <CommentArea id="listacommenti" book={selectedBook} />
        </div>
      </div>
    </div>
  );
}

export default BasicExample;