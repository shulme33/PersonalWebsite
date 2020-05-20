export function getFoodItems(axios, runDate) {
  return `
  select *

  from  foodItemEaten ie
  
  where dateEaten = '2020-04-26'
  order by foodItemKey desc
  `;
}
