// Your code here
import React from 'react';

const FoodBox = ({ food, deleteFood }) => {
  const { id, name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  const handleDelete = () => {
    deleteFood(id);
  };


  return (
    <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{name}</strong>
          </p>
      <div className="media-left">
        <figure className="image is-64x64">
          <img className="food-image" src={image} alt={name} />
        </figure>
      </div>
          <p>
            <span className="has-text-weight-bold">Calories:</span> {calories}
          </p>
          <p>
            <span className="has-text-weight-bold">Servings:</span> {servings}
          </p>
          <p className="has-text-weight-bold">Total Calories: {totalCalories} kcal</p>
        </div>
      </div>
      <div className="media-right">
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </article>
  </div>
);
};

export default FoodBox;