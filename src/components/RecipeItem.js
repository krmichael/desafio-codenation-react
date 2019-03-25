import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ thumbnail, title, ingredients }) => {
  return (
    <div className="col-sm-3 mt-4">
      <div className="card">
        <img className="card-img-top img-fluid" src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
        </div>
      </div>
    </div>
  );
}

RecipeItem.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.node,
  ingredients: PropTypes.node
}

export default RecipeItem;