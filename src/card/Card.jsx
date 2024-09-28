
import PropTypes from 'prop-types';
import './Card.css';

 export const Card = ({ imageUrl, tag, title, description, attribution }) => {
    return (
      <div className="card">
        <header className="card-header">
          <img src={imageUrl} alt="Card Image" className="card-image"/>
        </header>
        <div className="card-tag">
          <p className='card-tag-p'>{tag}</p>
        </div>
        <p className='card-title'>{title}</p>
        <p className='card-description'>{description}</p>
        <hr className='card-divider'/>
        <p className="attribution">{attribution}</p>
      </div>
    );
  };
  
  Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    tag: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    attribution: PropTypes.string,
  };
  
  Card.defaultProps = {
    tag: 'Default Tag',
    description: 'No description provided',
    attribution: 'Unknown',
  };
