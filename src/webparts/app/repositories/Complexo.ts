import { IComplexoItems } from '../interfaces/IComplexoItems';

export const mapGetItemsComplexo = (items: IComplexoItems[]) => {
  const mappedComplexo: IComplexoItems[] = [];
  items.forEach((item) => {
    mappedComplexo.push({
      Id: item.Id,
      Nome: item.Nome,
      Created: item.Created,
      Modified: item.Modified,
    });
  });

  return mappedComplexo;
};
