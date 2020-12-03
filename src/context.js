import React from "react";

function usePersistedState(defaultValue, key) {
  const [state, setState] = React.useState(
    JSON.parse(localStorage.getItem(key)) || defaultValue,
    key
  );

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

const AppContext = React.createContext(null);
export default AppContext;
export const useAppContext = () => React.useContext(AppContext);
export var store = {};
export const getStore = () => ({ ...store });
export const AppContextProvider = ({ children }) => {

  const collections = usePersistedState([], "collections");
  const collectionItems = usePersistedState([], "collectionItems");
  const categories = usePersistedState([], "categories");
  const categoryItems = usePersistedState([], "categoryItems");

  const tags = usePersistedState([], "tags");
  const products = usePersistedState([], "products");

  store = {
    collections,
    categories,
    tags,
    products,
    collectionItems,
    categoryItems,
  };

};
