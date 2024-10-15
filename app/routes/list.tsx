import { Link, Outlet } from "@remix-run/react"

export type RecipeItemsType = {
  recipe_id: number;
  name: string;
  link?: string;
}

export const mockRecipeItems: RecipeItemsType []= [
  {
    recipe_id: 1,
    name: 'recipe 1',
  },
  {
    recipe_id: 2,
    name: 'recipe 2',
  },
  {
    recipe_id: 3,
    name: 'recipe 3',
    link: 'https://github.com/GuRikO1/recipe'
  }
]


const Sidebar = ({recipeItems}: { recipeItems: RecipeItemsType[] }) => {
  return (
    <div id='sidebar'>
      <h1>Recipes</h1>
      {recipeItems.length ? recipeItems.map((recipeItem) => 
        <div key={recipeItem.recipe_id}>
          <Link to={`/list/${recipeItem.recipe_id}`}>{recipeItem.name}</Link>
        </div>
      ) : <div>Recipe Not Found</div>}
    </div>
  )
}

const List = () => {
  const recipeItems = mockRecipeItems
  return (
    <div className="dark:text-white">
      <Sidebar recipeItems={recipeItems} />
      <Outlet />
    </div>
  )
}

export default List
