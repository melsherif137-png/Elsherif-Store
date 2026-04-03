import { useState } from "react";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";

const Category = ({
  setSelectCategory,
  selectCategory,
  setSearchTerm,
  searchTerm,
  categories,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const inputRef = useRef(null);
  const filterRef = useRef(null);
  const [open, setOpen] = useState(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const hosdleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const toggleSearch = () => {
    setOpen((prev) => !prev);

    setTimeout(() => {
      if (!open) {
        inputRef.current?.focus();
      }
    }, 0);
  };
  return (
    <div className="filterTop">
      <motion.div
        className="category"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      >
        <button
          ref={filterRef}
          className="All"
          onClick={() => {
            toggleFilter();
          }}
        >
          ِ{selectCategory}
          <FaChevronDown
            className={`filter-icon ${showFilter ? "active" : ""}`}
          />
        </button>

        <AnimatePresence>
          {showFilter && (
            <motion.div
              className="filters"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {categories.map((category) => {
                return (
                  <motion.button
                    onClick={() => {
                      setSelectCategory(category);
                      setShowFilter(false);
                      setSearchTerm("");
                    }}
                  >
                    {category}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="searchFilter"
        onClick={() => inputRef.current.focus()}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1, ease: "easeOut", delay: 0.2 }}
      >
        <input
          type="text"
          ref={inputRef}
          value={searchTerm}
          onChange={hosdleSearch}
          placeholder="search.."
        />
        <IoSearch className="searchIcon" onClick={toggleSearch} />
      </motion.div>
    </div>
  );
};

export default Category;
