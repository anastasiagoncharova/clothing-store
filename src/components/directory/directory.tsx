import CategoryItem from "../category-item/category-item";
import "./directory.styles.scss";
import {categories} from './../../shared/data/categories.js';

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
