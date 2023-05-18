import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({category}: any): JSX.Element => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;