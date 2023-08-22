import { InputHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import styles from "./category-preview.module.scss";
import { CategoryItem } from "../../store/categories/category.types";
import ProductCard from "../product-card/product-card";

type CategoryPreviewProps = { title: string, products: CategoryItem[] } & InputHTMLAttributes<HTMLInputElement>;

const CategoryPreview: FC<CategoryPreviewProps> = ({title, products}) => {
  return (
    <div className={styles.categoryPreviewContainer}>
      <h2>
        <Link className={styles.title} href={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className={styles.preview}>
        {products
          .filter((_: any, idx: number) => idx < 4)
          .map((product: any) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
