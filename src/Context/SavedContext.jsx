import { createContext, useContext, useEffect, useState } from "react";

const savedContext = createContext();

export const SavedContext = ({ children }) => {
  const [saved, setSaved] = useState(() => {
    const dataSaved = localStorage.getItem("saved");
    return dataSaved ? JSON.parse(dataSaved) : [];
  });

  const [favorite, setFavorite] = useState(() => {
    const dataFav = localStorage.getItem("favorite");
    return dataFav ? JSON.parse(dataFav) : [];
  });

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  // add saved
  const addItem = (product) => {
    let added = false;

    setSaved((prev) => {
      const exist = prev.some((i) => i && i.id === product.id);

      if (exist) {
        added = false;
        return prev;
      }

      added = true;
      return [...prev, product];
    });

    return added;
  };

  // delete saved
  const deleteItem = (product) => {
    setSaved((prev) => prev.filter((i) => i && i.id !== product.id));
  };

  // add favorite
  const addFavorite = (product) => {
    let added = false;

    setFavorite((prev) => {
      const exist = prev.some((i) => i && i.id === product.id);

      if (exist) {
        added = false;
        return prev;
      }

      added = true;
      return [...prev, product];
    });

    return added;
  };

  // delete favorite
  const deleteFavorite = (product) => {
    setFavorite((prev) => prev.filter((i) => i && i.id !== product.id));
  };

  return (
    <savedContext.Provider
      value={{
        saved,
        favorite,
        addItem,
        deleteItem,
        addFavorite,
        deleteFavorite,
      }}
    >
      {children}
    </savedContext.Provider>
  );
};

export const useSaved = () => useContext(savedContext);
