import { useRef, useState, useLayoutEffect } from "react";
import styles from './category-item.module.scss';
import Link from 'next/link';

const CategoryItem = ({ category }: any): JSX.Element => {
  const { title, imageUrl, route } = category;
  console.log(imageUrl);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current && ref.current.offsetWidth) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);
  console.log(ref);
  return (
    <div ref={ref} className={styles.CategoryItemContainer}>
      <Link href={route}>
        <div
          className={styles.BackgroundImage}
          style={{
            backgroundImage: `url(${imageUrl})`,
            width: `${width - 6}px`
          }}
        ></div>
        <div className={styles.Body}>
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
