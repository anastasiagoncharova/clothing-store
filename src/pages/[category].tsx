import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import ProductCard from "../components/product-card/product-card";
import Spinner from "../shared/components/spinner/spinner";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../store/categories/category.selector";

import styles from "../routes/category/category.module.scss";

const Category = () => {
  const route = useRouter();
  const category: any = route.query.category;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <div className={styles.Title}>{category.toUpperCase()}</div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.CategoryContainer}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
