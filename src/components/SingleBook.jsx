import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import CommentArea from '../components/CommentArea';

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;  
const classCard = selected ? "border border-danger" : "mb-4"
    return (
      <Card style={{ width: '18rem' }}  className={classCard}>
        <Card.Img onClick={this.toggleSelected}  variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            {book.price + "$"}
          </Card.Text>
          <Button 
            variant={selected ? "success" : "primary"} 
            
          >
            {selected ? "Selezionato" : "Da selezionare"}
          </Button>
        


        </Card.Body>
      </Card>
    );
  }
}

SingleBook.propTypes = {
  book: PropTypes.shape({
    asin: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
};

export default SingleBook;