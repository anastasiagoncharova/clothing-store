import styles from './category-item.module.scss';
import Link from 'next/link';

const CategoryItem = ({ category }: any): JSX.Element => {
  const { title, imageUrl, route } = category;
  console.log(route);


  return (
    <div className={styles.CategoryItemContainer}>
      <Link href={route}>
        <div
          className={styles.BackgroundImage}
          style={{
            backgroundImage: `url("${imageUrl}")`,
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
