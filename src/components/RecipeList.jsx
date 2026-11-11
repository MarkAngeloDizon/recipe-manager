import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, onToggleFavorite, onDelete }) {
  // TODO: if recipes.length === 0, render a friendly empty-state message
  //       (e.g., "No recipes match this filter.").
<<<<<<< HEAD
  {recipes.length === 0 && (
    <div className="alert alert-warning">
      <span>No recipes match this filter.</span>
    </div>
  )}
=======
  if (recipes.length === 0) {
    return <p className="text-center text-muted">No recipes match this filter.</p>;
  }

>>>>>>> 3eb7e4ebd5e391c394b422069150ce44689fb909
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* TODO: map over recipes and render a <RecipeCard /> for each.
          - Pass recipe, onToggleFavorite, onDelete as props.
          - Use recipe.id as the key. */}
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onToggleFavorite={onToggleFavorite}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

