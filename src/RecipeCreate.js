import React, { useState } from 'react'

function RecipeCreate({ handleCreate }) {
  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }

  const [formData, setFormData] = useState({ ...initialFormState })
  const handleChange = ({ target }) =>
    setFormData({ ...formData, [target.name]: target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submission', formData)
    handleCreate(formData)
    setFormData({ ...initialFormState })
  }

  return (
    <form name="create" onSubmit={handleSubmit} required>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  size="10"
                />
              </label>
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                required
                size="10"
              ></input>
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
                required
                size="10"
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                required
              >
              </textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
                required
              >
              </textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default RecipeCreate
