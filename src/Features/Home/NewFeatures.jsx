import products from "../../data/products.json";
import { useCart } from "../../Context/CartContext";
import { motion } from "framer-motion";
import Heading from "../../components/Heading";

const NewFeatures = () => {
  const { addItem } = useCart();
  const name = "Best Sellers";
  return (
    <motion.div className="featured-products">
      <div className="container">
        <Heading name={name} />
        <div className="new-featured">
          {products.slice(24, 27).map((product, index) => (
            <motion.div
              key={product.id}
              className="featured-card"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                y: {
                  duration: 0.1,
                  ease: "easeOut",
                  delay: index * 0.1,
                },
                opacity: {
                  duration: 0.3,
                  delay: index * 0.2, // بعد الحركة بـ 0.1
                },
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="card-img"
              />

              <div className="card-content">
                <h3>{product.name}</h3>

                <div className="rate-feature">
                  <span className="rate">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < Math.round(product.rate || 0) ? "\u2B50" : ""}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              <div className="feature-add">
                <p>${product.price.toLocaleString()}</p>
                <button onClick={() => addItem(product)}>Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NewFeatures;
