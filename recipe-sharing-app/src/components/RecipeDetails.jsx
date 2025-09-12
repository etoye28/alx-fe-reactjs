import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { DeleteRecipeButton } from './DeleteRecipeButton';

export const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '1rem' }}>
        <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
        <span style={{ margin: '0 0.5rem' }}>|</span>
        <DeleteRecipeButton id={recipe.id} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};
