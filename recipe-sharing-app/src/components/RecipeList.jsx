// RecipeList component
// RecipeList component
/*
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

export const RecipeList = () => {
  // instead of all recipes, use the filtered list
  const recipes = useRecipeStore((state) => state.getFilteredRecipes(state));

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              marginBottom: '0.75rem',
              borderBottom: '1px solid #eee',
              paddingBottom: '0.5rem',
            }}
          >
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
              <DeleteRecipeButton id={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};


import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import  DeleteRecipeButton  from './DeleteRecipeButton';

export const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '0.75rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
            <h3> <Link to={`/recipes/${recipe.id}`}>{recipe.title} </Link></h3>
            <p>{recipe.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
              <DeleteRecipeButton id={recipe.id} />
            </div>
          </div>
        )) )}
      </div>
    );
  };
  */
// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'
import DeleteRecipeButton from './DeleteRecipeButton'

export const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)

  // ✅ compute filtered recipes locally
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              marginBottom: '0.75rem',
              borderBottom: '1px solid #eee',
              paddingBottom: '0.5rem',
            }}
          >
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
              <DeleteRecipeButton id={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}
