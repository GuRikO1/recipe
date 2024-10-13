import { Recipe } from "~/domain/recipe";

import Papa, { ParseResult } from "papaparse";

export const recipeRepository = {
  getRecipes: async (): Promise<Recipe[]> => {
    return new Promise((resolve, reject) => {
      Papa.parse("/recipe/assets/data/recipes.csv", {
        header: true,
        download: true,
        skipEmptyLines: true,
        delimiter: ",",
        complete: (results: ParseResult<Recipe>) => {
          if (results.errors.length) {
            reject(results.errors);
          } else {
            resolve(results.data);
          }
        },
      });
    });
  },
  getRecipeById: async(recipe_id: number): Promise<Recipe | undefined> => {
    return await recipeRepository.getRecipes().then((recipes) =>
      recipes.find((recipe) => recipe.recipe_id === recipe_id)
    );
  }
};
