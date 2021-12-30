import React from "react";

function RecipeTable ({recipes, deleteRecipe}) {
    //Return the recipes as a table.
    return recipes.map((rec, index) => {
        return (
            <tr key={index}>
                <td>{rec.name}</td>
                <td>{rec.cuisine}</td>
                <td><img src={rec.photo} alt={`Graphicof ${rec.name}`} /></td>
                <td className="content_td"><p>{rec.ingredients}</p></td>
                <td className="content_td"><p>{rec.preparation}</p></td>
                <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
            </tr>
        );
    });
}

export default RecipeTable;
