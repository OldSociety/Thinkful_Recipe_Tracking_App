import React from "react";
import RecipeTable from "./RecipeTable";

function RecipeList({recipes, deleteRecipe}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <RecipeTable recipes={recipes} deleteRecipe={deleteRecipe}/>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
