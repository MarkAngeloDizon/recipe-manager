
import type {
  SavedRecipe,
  NewRecipe,
  RecipePatch,
} from "./recipes.types";

const KEY = "saved-recipes";

// Read saved recipes from localStorage
const read = (): SavedRecipe[] => {
  try {
    return JSON.parse(
      localStorage.getItem(KEY) ?? "[]"
    ) as SavedRecipe[];
  } catch {
    return [];
  }
};

// Save recipes to localStorage
const write = (rows: SavedRecipe[]) => {
  localStorage.setItem(KEY, JSON.stringify(rows));
};

// Get all saved recipes
export const getRecipes = async (): Promise<SavedRecipe[]> => {
  return read();
};

// Create a new recipe
export const createRecipe = async (
  recipe: NewRecipe
): Promise<SavedRecipe> => {
  const row: SavedRecipe = {
    ...recipe,
    id: crypto.randomUUID(),
  };

  write([...read(), row]);

  return row;
};

// Update an existing recipe
export const updateRecipe = async ({
  id,
  ...patch
}: RecipePatch): Promise<SavedRecipe> => {
  const rows = read().map((recipe) =>
    recipe.id === id
      ? { ...recipe, ...patch }
      : recipe
  );

  write(rows);

  const updated = rows.find((recipe) => recipe.id === id);

  if (!updated) {
    throw new Error("Recipe not found");
  }

  return updated;
};

// Delete a recipe
export const deleteRecipe = async (
  id: SavedRecipe["id"]
): Promise<{ id: SavedRecipe["id"] }> => {
  write(read().filter((recipe) => recipe.id !== id));

  return { id };
};
