import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ProductCard from '../../components/product-card/product-card';
import Spinner from '../../shared/components/spinner/spinner';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import styles from './category.module.scss';

const Category = () => {
  const route = useRouter();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(
    categoriesMap[route.query.category as string]
  );

  useEffect(() => {
    setProducts(categoriesMap[route.query.category as string]);
  }, [route.query.category, categoriesMap]);

  return (
    <>
      <div className={styles.Title}>
        {(route.query.category as string)?.toUpperCase()}
      </div>
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
