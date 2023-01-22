import { useState, useEffect } from "react";
import axios from "axios";
import Category from "../../components/Category";
const ManageCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/get-category",
      responseType: "json",
    }).then((response) => {
      setCategoryData(response.data.data);
    });
  }, []);

  return categoryData.map((item) => (
    <Category id={item.id} category={item.category_item} />
  ));
};

export default ManageCategory;
