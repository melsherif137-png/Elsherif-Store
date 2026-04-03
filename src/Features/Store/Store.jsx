import products from "../../data/products.json";
import Product from "./components/Product";
import "../Store/Store.css";
import Item from "./Item";
import { useState, useEffect } from "react";
import Category from "./components/Category";
import BeatLoader from "react-spinners/BeatLoader";

const Store = ({
  loading,
  setLoading,
  itemDetails,
  setItemDetails,
  selected,
  setSelected,
  categories,
  setSelectCategory,
  selectCategory,
}) => {
  const [savedMenu, setSavedMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setLoading(true);
    setTimeout(
      () => {
        setLoading(false);
      },
      Math.random() * 1000 + 500,
    ); // Simulate loading time between 0.5s and 1.5s
  }, []);
  const FilerProducts =
    selectCategory === "All"
      ? products
      : products.filter((item) => item.category === selectCategory);

  const filteredBySearch = FilerProducts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {loading ? (
        <BeatLoader color="#336b54" className="loading" />
      ) : (
        <div className="store">
          <Category
            categories={categories}
            setSelectCategory={setSelectCategory}
            selectCategory={selectCategory}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />

          <div className="container">
            <div className="products">
              {filteredBySearch.map((cart, index) => (
                <Product
                  key={cart.id}
                  cart={cart}
                  index={index}
                  onSelect={() => setSelected(cart)}
                  savedMenu={savedMenu}
                  setSavedMenu={setSavedMenu}
                />
              ))}
            </div>
          </div>

          {selected && <Item cart={selected} />}

          {selected && (
            <div className="overlay" onClick={() => setSelected(null)}></div>
          )}
        </div>
      )}
    </>
  );
};

export default Store;
