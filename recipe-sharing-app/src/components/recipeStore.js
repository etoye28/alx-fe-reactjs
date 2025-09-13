import {create} from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [
    // optional sample recipes so the UI isn't empty — remove or edit if you prefer
    { id: 1, title: 'Spaghetti Aglio e Olio', description: 'Spaghetti with garlic, olive oil, chili flakes.' },
    { id: 2, title: 'Tomato Basil Soup', description: 'Creamy tomato soup with fresh basil.' },
    { id: 3, title: 'Grilled Chicken Salad', description: 'Healthy salad with grilled chicken and veggies.' }
  ],
    searchTerm: '',
  setSearchTerm: (term) =>
    set({ searchTerm: term }),

  // computed recipes based on searchTerm
  getFilteredRecipes: (state) => {
    if (!state.searchTerm) return state.recipes
    return state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  },
  
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  setRecipes: (recipes) => set({ recipes }),
}));

