import CategoriesPreview from "./categories-preview";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  return (
    <CategoriesPreview />
  );
};

export default Shop;
