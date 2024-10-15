import { useLoaderData } from "@remix-run/react";
import { mockRecipeItems } from "./list";

export const getRecipe = (id: number) => mockRecipeItems.filter(item => item.recipe_id === id)[0] || undefined

export const clientLoader = ({ params }: {params: {id: number}}) => {
  const { id } = params
  const item = getRecipe(Number(id));

  return ({
    item,
  });
};

const ListItem = () => {
  const { item } = useLoaderData<typeof clientLoader>()

  return (
    <div>
      {
        item && (
          <>
            <h2>{item.name}</h2>
            {item.link && 
              <div>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.link}
                </a>
              </div>
            }         
          </>
        )
      }
    </div>
  )
}

export default ListItem
