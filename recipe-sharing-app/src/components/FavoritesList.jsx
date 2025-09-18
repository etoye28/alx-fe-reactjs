// src/components/FavoritesList.jsx
/*
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean)
  );

  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
*/
// src/components/FavoritesList.jsx
import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const FavoritesList = () => {
  // ✅ pull state slices separately
  const favorites = useRecipeStore((state) => state.favorites)
  const recipes = useRecipeStore((state) => state.recipes)

  // ✅ compute favoriteRecipes outside of Zustand (safe)
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean) // remove nulls in case recipe was deleted

  if (favoriteRecipes.length === 0) {
    return <p>No favorites yet.</p>
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FavoritesList

