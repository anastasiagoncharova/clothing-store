import { InputHTMLAttributes, FC } from 'react';
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
import { CategoryItem } from "../../store/categories/category.types";
import ProductCard from "../product-card/product-card";
type CategoryPreviewProps = { title: string, products: CategoryItem[] } & InputHTMLAttributes<HTMLInputElement>;

const CategoryPreview: FC<CategoryPreviewProps> = ({title, products}) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
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
