import { motion } from "framer-motion";
import Heading from "../../components/Heading";
import { Link } from "react-router-dom";

const Categories = ({ setSelectCategory, selectCategory }) => {
  const categories = [
    {
      name: "Electronics",
      image:
        "/categories/Best Luxury Gifts 2025_ Gift Ideas Worth the Splurge.jpg",
      className: "small",
    },
    {
      name: "Accessories",
      image: "/categories/Tech Travel Organizer Bag for Flights.jpg",
      className: "big",
    },
    {
      name: "Wearables",
      image: "/categories/download (6).jpg",
      className: "small",
    },
  ];
  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <div className="categories">
      <Heading name="Shop by Category" />

      <div className="categories-grid">
        <div className="container">
          {categories.map((category, index) => {
            const variant = index === 1 ? rightVariant : leftVariant;
            return (
              <motion.div
                key={index}
                className={`categorie-div ${category.className}`}
                variants={variant}
                initial="hidden"
                whileInView="show"
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className={`imageCate ${category.className}`}>
                  <img src={category.image} alt={category.name} />
                </div>

                <div className="hiddenCate">
                  <h3 exit={{ opacity: 0, scale: 0.8 }}>{category.name}</h3>
                  <Link to={`/store`}>
                    <motion.button
                      onClick={() => {
                        setSelectCategory(category.name);
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.2,

                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      viewport={{ once: false, amount: 0.1 }}
                    >
                      Shop Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
