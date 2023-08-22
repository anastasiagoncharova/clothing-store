import CategoryItem from '../category-item/category-item';
import { categories } from './../../shared/data/categories.js';
import styles from './directory.module.scss';

const Directory = () => {
  return (
    <div className={styles.directoryContainer}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
