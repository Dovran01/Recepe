import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
}

const [formData, setFormData] = useState({ ...initialFormState });
const handleChange = ({ target }) => {
  setFormData({
    ...formData,
    [target.name]: target.value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData.name, formData.cuisine, formData.photo, formData.ingredients, formData.preparation);
  createRecipe(formData)
  setFormData({ ...initialFormState });
};

  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                required={true}
                onChange={handleChange}
                value={formData.name}
                placeholder="Name" // Added placeholder
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine" // Added placeholder
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL" // Added placeholder
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                required={true}
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients" // Added placeholder
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                required={true}
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation" // Added placeholder
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;