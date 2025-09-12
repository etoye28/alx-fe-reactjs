import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({ id: recipeId, title, description });
    navigate(`/recipes/${recipeId}`); // go back to details after update
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <div>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          style={{ display: 'block', marginBottom: '0.5rem' }}
        />
      </div>
      <div>
        <textarea
          placeholder="Recipe Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={{ display: 'block', marginBottom: '0.5rem' }}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: '0.5rem' }}>
        Cancel
      </button>
    </form>
  );
};
export default EditRecipeForm
