const FoodBox = (props) => {
  const { id,name, calories, image, servings } = props.food;
  const handleDeleteClick = () => {
    props.deleteFood(id); 
  };

  return (
    <div>
      <p>{name}</p>
      <img src={image} style={{width:"200px"}}/>
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {calories * servings} kcal</b>
      </p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default FoodBox;