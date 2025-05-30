import { motion } from "framer-motion";
import PropTypes from "prop-types"


export const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="category-buttons">
      <div className="buttonCat">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => {
              onSelect(category);
            }}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="selectCat">
        <label htmlFor="category-select">Categories:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => {
            onSelect(e.target.value);
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired, 
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
