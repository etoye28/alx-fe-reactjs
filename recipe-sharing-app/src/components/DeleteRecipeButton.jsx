import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
 const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm('Delete this recipe?')) return;
    deleteRecipe(id);
    // if user is on details page, navigate back to list
    navigate('/');
  };

  return (
    <button type="button" onClick={handleDelete}>
      Delete
    </button>
  );
};
export default DeleteRecipeButton