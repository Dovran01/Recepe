import React from "react";
import RecipeData from "./RecipeData";
import RecipePost from "./RecipePost";


function RecipeList( {recipes, deleteRecipe} ) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipePost recipe={recipe} key={index} deleteRecipe={() => deleteRecipe(index)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;